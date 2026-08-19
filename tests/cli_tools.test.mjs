import assert from "node:assert/strict";
import test from "node:test";

import {
  buildChromeArgs,
  chromeCandidates,
  defaultProfileDir,
  findChromeExecutable,
} from "../plugins/byu-faculty-productivity/scripts/chrome_session.mjs";
import { summarizePage } from "../plugins/byu-faculty-productivity/scripts/chrome_cdp.mjs";

test("profile directories are platform-specific and dedicated", () => {
  assert.match(defaultProfileDir("darwin", { HOME: "/sample-home" }), /BYU Faculty Productivity/);
  assert.match(defaultProfileDir("linux", { HOME: "/sample-home" }), /byu-faculty-productivity/);
  assert.match(defaultProfileDir("win32", { LOCALAPPDATA: "C:\\LocalData" }), /BYUFacultyProductivity/);
});

test("Chrome candidates cover macOS, Windows, and Linux", () => {
  assert.ok(chromeCandidates("darwin", { HOME: "/sample-home" }).some((item) => item.includes("Google Chrome.app")));
  assert.ok(chromeCandidates("win32", { PROGRAMFILES: "C:\\Programs" }).some((item) => item.endsWith("chrome.exe")));
  assert.ok(chromeCandidates("linux", { HOME: "/sample-home" }).some((item) => item.includes("google-chrome")));
});

test("explicit Chrome path wins", () => {
  assert.equal(findChromeExecutable("linux", { CHROME_PATH: "/custom/chrome" }, () => true), "/custom/chrome");
});

test("launcher always uses localhost port and dedicated profile", () => {
  const args = buildChromeArgs({ port: 9333, profileDir: "/isolated/profile" });
  assert.ok(args.includes("--remote-debugging-address=127.0.0.1"));
  assert.ok(args.includes("--remote-debugging-port=9333"));
  assert.ok(args.includes("--user-data-dir=/isolated/profile"));
});

test("page summaries omit full URLs and paths", () => {
  const summary = summarizePage({ id: "page-1", title: "Safe Page", url: "https://example.edu/private/path?secret=value" });
  assert.deepEqual(summary, { id: "page-1", title: "Safe Page", origin: "https://example.edu" });
});
