# CLI Browser Mode

Use this mode when the user asks to work from Codex CLI, including Codex CLI in VS Code's integrated terminal. It provides browser lifecycle management, read-only structural probing, and adaptive task scripts for varied Learning Suite and Kuali work.

## Requirements

- Node.js 22 or newer
- Google Chrome
- Codex CLI signed into the BYU CES ChatGPT Edu identity

The tools use Chrome DevTools Protocol on `127.0.0.1` and a dedicated Chrome profile. They do not require the ChatGPT Chrome extension. Never point remote debugging at the user's normal Chrome profile.

Resolve the plugin root from the loaded skill path, then use the scripts in the plugin-level `scripts/` directory.

## Start And Connect

1. Run `node ../../scripts/chrome_session.mjs status` from the skill directory.
2. If stopped, run `node ../../scripts/chrome_session.mjs start`.
3. Ask the user to sign into the BYU service manually in the dedicated Chrome window and tell you when the safe page is ready.
4. Run `node ../../scripts/chrome_cdp.mjs list`.
5. Confirm the target from the returned page title and origin.
6. Before probing, confirm that the visible page does not contain student PII, restricted data, HIPAA-protected data, CUI, or export-controlled information.
7. Run `node ../../scripts/chrome_cdp.mjs probe "<page title or id>"`.

The probe returns only the page title, origin, headings, button labels, and element counts.

For a varied task that needs interaction, read [Adaptive Browser Task Scripts](browser-task-scripts.md). Create a task-specific script in the user's workspace, run its preview mode, obtain explicit confirmation, run the same task with `--apply`, and verify the result. Do not use task scripts for cookies, browser storage, direct network calls, passwords, MFA fields, or prohibited data.

## Finish

Run `node ../../scripts/chrome_session.mjs stop` after the task. The dedicated profile persists so the user does not need to sign in every time. It contains browser state and must never be copied into a repository, shared folder, support bundle, or prompt.

If Node or Chrome is unavailable, explain the missing prerequisite. Do not fall back to the user's normal Chrome profile.
