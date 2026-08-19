#!/usr/bin/env node

import fs from "node:fs";
import fsp from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { pathToFileURL } from "node:url";

import { CdpClient, fetchJson, listPages, summarizePage } from "./chrome_cdp.mjs";

const DEFAULT_PORT = 9222;

export function defaultProfileDir(platform = process.platform, env = process.env) {
  if (env.BYU_AI_CHROME_PROFILE) return path.resolve(env.BYU_AI_CHROME_PROFILE);
  if (platform === "win32") {
    const base = env.LOCALAPPDATA || env.USERPROFILE || os.homedir();
    return path.join(base, "BYUFacultyProductivity", "chrome-profile");
  }
  if (platform === "darwin") {
    return path.join(env.HOME || os.homedir(), "Library", "Application Support", "BYU Faculty Productivity", "chrome-profile");
  }
  const base = env.XDG_DATA_HOME || path.join(env.HOME || os.homedir(), ".local", "share");
  return path.join(base, "byu-faculty-productivity", "chrome-profile");
}

export function chromeCandidates(platform = process.platform, env = process.env) {
  if (env.CHROME_PATH) return [env.CHROME_PATH];
  if (platform === "darwin") {
    return [
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      path.join(env.HOME || os.homedir(), "Applications", "Google Chrome.app", "Contents", "MacOS", "Google Chrome"),
    ];
  }
  if (platform === "win32") {
    return [
      env.PROGRAMFILES && path.join(env.PROGRAMFILES, "Google", "Chrome", "Application", "chrome.exe"),
      env["PROGRAMFILES(X86)"] && path.join(env["PROGRAMFILES(X86)"], "Google", "Chrome", "Application", "chrome.exe"),
      env.LOCALAPPDATA && path.join(env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe"),
    ].filter(Boolean);
  }
  return [
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
}

export function findChromeExecutable(platform = process.platform, env = process.env, exists = fs.existsSync) {
  const match = chromeCandidates(platform, env).find((candidate) => exists(candidate));
  if (!match) {
    throw new Error("Google Chrome was not found. Install Chrome or set CHROME_PATH to its executable.");
  }
  return match;
}

export function buildChromeArgs({ port, profileDir, initialUrl = "about:blank" }) {
  return [
    `--remote-debugging-address=127.0.0.1`,
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDir}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--new-window",
    initialUrl,
  ];
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

async function endpointOnline(port) {
  try {
    return await fetchJson("/json/version", { port });
  } catch {
    return null;
  }
}

async function waitForEndpoint(port, expectedOnline, timeoutMs = 12_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const online = Boolean(await endpointOnline(port));
    if (online === expectedOnline) return true;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  return false;
}

function configFrom(flags) {
  const port = Number(flags.port || process.env.BYU_AI_CDP_PORT || process.env.CHROME_CDP_PORT || DEFAULT_PORT);
  if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error(`Invalid port: ${port}`);
  return {
    port,
    profileDir: path.resolve(flags.profile || defaultProfileDir()),
    chrome: flags.chrome || null,
    initialUrl: flags.url || "about:blank",
    dryRun: Boolean(flags["dry-run"]),
  };
}

async function start(config) {
  const existing = await endpointOnline(config.port);
  if (existing) {
    return { status: "already-running", port: config.port, profileDir: config.profileDir, browser: existing.Browser };
  }
  const executable = config.chrome || findChromeExecutable();
  const args = buildChromeArgs(config);
  if (config.dryRun) return { status: "dry-run", executable, args, port: config.port, profileDir: config.profileDir };
  await fsp.mkdir(config.profileDir, { recursive: true, mode: 0o700 });
  const child = spawn(executable, args, { detached: true, stdio: "ignore" });
  child.unref();
  if (!(await waitForEndpoint(config.port, true))) {
    throw new Error("Chrome started but the local debugging endpoint did not become available.");
  }
  const version = await endpointOnline(config.port);
  return {
    status: "started",
    pid: child.pid,
    port: config.port,
    profileDir: config.profileDir,
    browser: version?.Browser,
    next: "Sign into BYU in this dedicated Chrome window. Do not use it for ordinary browsing.",
  };
}

async function status(config) {
  const version = await endpointOnline(config.port);
  if (!version) return { status: "stopped", port: config.port, profileDir: config.profileDir };
  const pages = await listPages({ port: config.port });
  return {
    status: "running",
    port: config.port,
    profileDir: config.profileDir,
    browser: version.Browser,
    pages: pages.map(summarizePage),
  };
}

async function stop(config) {
  const version = await endpointOnline(config.port);
  if (!version) return { status: "already-stopped", port: config.port };
  const client = new CdpClient(version.webSocketDebuggerUrl);
  await client.connect();
  try {
    await client.send("Browser.close").catch(() => {});
  } finally {
    client.close();
  }
  const stopped = await waitForEndpoint(config.port, false);
  return { status: stopped ? "stopped" : "stop-requested", port: config.port, profileDir: config.profileDir };
}

function usage() {
  console.error(`Usage:
  node chrome_session.mjs start [--port 9222] [--profile PATH] [--chrome PATH] [--url URL] [--dry-run]
  node chrome_session.mjs status [--port 9222]
  node chrome_session.mjs stop [--port 9222]

The debugging service binds to localhost and uses a dedicated Chrome profile.
Close the session when finished. Any local process can control this Chrome
window while the debugging port is open.`);
}

async function main() {
  const { positionals, flags } = parseCli(process.argv.slice(2));
  const [command] = positionals;
  const config = configFrom(flags);
  let result;
  if (command === "start") result = await start(config);
  else if (command === "status") result = await status(config);
  else if (command === "stop") result = await stop(config);
  else {
    usage();
    process.exitCode = 2;
    return;
  }
  console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message || String(error));
    process.exitCode = 1;
  });
}
