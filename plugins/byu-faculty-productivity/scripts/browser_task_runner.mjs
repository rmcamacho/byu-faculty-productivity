#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { evaluateFunction } from "./chrome_cdp.mjs";

const FORBIDDEN_SOURCE = [
  [/(?:document\s*\.\s*)?cookie\b/i, "cookies"],
  [/cookieStore\b/i, "cookie storage"],
  [/localStorage\b/i, "local storage"],
  [/sessionStorage\b/i, "session storage"],
  [/indexedDB\b/i, "browser databases"],
  [/\bfetch\s*\(/i, "direct network requests"],
  [/XMLHttpRequest\b/i, "direct network requests"],
  [/\bWebSocket\b/i, "direct network requests"],
  [/sendBeacon\b/i, "direct network requests"],
];

export function parseRunnerArgs(argv) {
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

export function validateTaskSource(source) {
  for (const [pattern, capability] of FORBIDDEN_SOURCE) {
    if (pattern.test(source)) {
      throw new Error(`Browser tasks may not access ${capability}.`);
    }
  }
}

async function loadTask(taskPath) {
  const resolved = path.resolve(taskPath);
  const source = await fs.readFile(resolved, "utf8");
  validateTaskSource(source);
  const moduleUrl = `${pathToFileURL(resolved).href}?loaded=${Date.now()}`;
  const taskModule = await import(moduleUrl);
  if (typeof taskModule.default !== "function") {
    throw new Error("Task file must default-export a self-contained function.");
  }
  validateTaskSource(taskModule.default.toString());
  return { task: taskModule.default, resolved };
}

async function loadInput(inputPath) {
  if (!inputPath) return {};
  return JSON.parse(await fs.readFile(path.resolve(inputPath), "utf8"));
}

function usage() {
  console.error(`Usage:
  node browser_task_runner.mjs <page-id-or-title> <task.mjs> [--input input.json] [--port 9222] [--timeout 60000]
  node browser_task_runner.mjs <page-id-or-title> <task.mjs> [--input input.json] [--port 9222] [--timeout 60000] --apply

Task files must default-export one self-contained function. The function receives
{ applyArg, inputArg }. It must return a preview without changing the page when
applyArg is false. Use --apply only after the user confirms the exact preview.`);
}

async function main() {
  const { positionals, flags } = parseRunnerArgs(process.argv.slice(2));
  const [target, taskPath] = positionals;
  if (!target || !taskPath) {
    usage();
    process.exitCode = 2;
    return;
  }

  const { task, resolved } = await loadTask(taskPath);
  const inputArg = await loadInput(flags.input);
  const applyArg = Boolean(flags.apply);
  const timeoutMs = Number(flags.timeout || 60_000);
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1_000 || timeoutMs > 300_000) {
    throw new Error("--timeout must be an integer from 1000 to 300000 milliseconds.");
  }
  const value = await evaluateFunction(
    target,
    task,
    { applyArg, inputArg },
    { port: flags.port, timeoutMs }
  );
  console.log(JSON.stringify({
    phase: applyArg ? "apply" : "preview",
    task: path.basename(resolved),
    value,
  }, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message || String(error));
    process.exitCode = 1;
  });
}
