#!/usr/bin/env node

import { pathToFileURL } from "node:url";

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 9222;

function requireWebSocket() {
  if (typeof WebSocket !== "function") {
    throw new Error("This tool requires Node.js 22 or newer.");
  }
}

export async function fetchJson(route, options = {}) {
  const host = options.host || process.env.CHROME_CDP_HOST || DEFAULT_HOST;
  const port = Number(options.port || process.env.BYU_AI_CDP_PORT || process.env.CHROME_CDP_PORT || DEFAULT_PORT);
  const response = await fetch(`http://${host}:${port}${route}`);
  if (!response.ok) {
    throw new Error(`Chrome debugging endpoint returned HTTP ${response.status}.`);
  }
  return response.json();
}

export async function listPages(options = {}) {
  const pages = await fetchJson("/json/list", options);
  return pages.filter((page) => page.type === "page");
}

export function summarizePage(page) {
  let origin = null;
  try {
    origin = new URL(page.url).origin;
  } catch {}
  return {
    id: page.id,
    title: page.title || "",
    origin,
  };
}

export async function findPage(target, options = {}) {
  const pages = await listPages(options);
  const normalized = String(target || "").toLowerCase();
  const match = pages.find((page) => page.id === target) || pages.find((page) =>
    (page.title || "").toLowerCase().includes(normalized) ||
    (page.url || "").toLowerCase().includes(normalized)
  );
  if (!match) {
    throw new Error(`No open Chrome page matched: ${target}`);
  }
  return match;
}

export class CdpClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.socket = null;
    this.nextId = 1;
    this.pending = new Map();
  }

  async connect() {
    requireWebSocket();
    this.socket = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", () => reject(new Error("Could not connect to Chrome.")), { once: true });
    });
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      clearTimeout(pending.timeout);
      if (message.error) pending.reject(new Error(message.error.message || "Chrome protocol error"));
      else pending.resolve(message.result);
    });
    this.socket.addEventListener("close", () => {
      for (const [, pending] of this.pending) {
        clearTimeout(pending.timeout);
        pending.reject(new Error("Chrome connection closed."));
      }
      this.pending.clear();
    });
  }

  async send(method, params = {}, timeoutMs = 10_000) {
    const id = this.nextId++;
    const result = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`Chrome command timed out: ${method}`));
      }, timeoutMs);
      this.pending.set(id, { resolve, reject, timeout });
    });
    this.socket.send(JSON.stringify({ id, method, params }));
    return result;
  }

  close() {
    if (this.socket && this.socket.readyState < WebSocket.CLOSING) this.socket.close();
  }
}

export async function withPage(target, callback, options = {}) {
  const page = await findPage(target, options);
  const client = new CdpClient(page.webSocketDebuggerUrl);
  await client.connect();
  try {
    await client.send("Runtime.enable");
    return await callback(client, page);
  } finally {
    client.close();
  }
}

export async function evaluateExpression(target, expression, options = {}) {
  return withPage(target, async (client) => {
    const result = await client.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    }, Number(options.timeoutMs) || 60_000);
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.exception?.description || "Browser task failed.");
    }
    return result.result?.value;
  }, options);
}

export async function evaluateFunction(target, task, args = {}, options = {}) {
  if (typeof task !== "function") throw new Error("Browser task must export a function.");
  return evaluateFunctionSource(target, task.toString(), args, options);
}

export async function evaluateFunctionSource(target, functionSource, args = {}, options = {}) {
  const expression = `(${functionSource})(${JSON.stringify(args)})`;
  return evaluateExpression(target, expression, options);
}

export async function probePage(target, options = {}) {
  return withPage(target, async (client) => {
    const result = await client.send("Runtime.evaluate", {
      expression: `(() => ({
        title: document.title,
        origin: location.origin,
        headings: Array.from(document.querySelectorAll("h1,h2,h3"))
          .map((element) => (element.innerText || element.textContent || "").replace(/\\s+/g, " ").trim())
          .filter(Boolean).slice(0, 20),
        buttons: Array.from(document.querySelectorAll("button,[role=button]"))
          .map((element) => (element.innerText || element.getAttribute("aria-label") || "").replace(/\\s+/g, " ").trim())
          .filter(Boolean).slice(0, 30),
        counts: {
          links: document.querySelectorAll("a").length,
          forms: document.querySelectorAll("form").length,
          inputs: document.querySelectorAll("input,select,textarea").length
        }
      }))()`,
      returnByValue: true,
    });
    return result.result?.value;
  }, options);
}

function usage() {
  console.error(`Usage:
  node chrome_cdp.mjs list [--port 9222]
  node chrome_cdp.mjs probe <page-id-or-title> [--port 9222]

This v0.2 tool is intentionally read-only. It does not expose arbitrary
JavaScript evaluation, navigation, clicks, form filling, cookies, or storage.`);
}

function parseCli(argv) {
  const positionals = [];
  const flags = {};
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (!value.startsWith("--")) {
      positionals.push(value);
      continue;
    }
    const key = value.slice(2);
    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      flags[key] = next;
      index += 1;
    } else {
      flags[key] = true;
    }
  }
  return { positionals, flags };
}

async function main() {
  const { positionals, flags } = parseCli(process.argv.slice(2));
  const [command, target] = positionals;
  const options = { port: flags.port };
  if (command === "list") {
    console.log(JSON.stringify((await listPages(options)).map(summarizePage), null, 2));
    return;
  }
  if (command === "probe" && target) {
    console.log(JSON.stringify(await probePage(target, options), null, 2));
    return;
  }
  usage();
  process.exitCode = 2;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message || String(error));
    process.exitCode = 1;
  });
}
