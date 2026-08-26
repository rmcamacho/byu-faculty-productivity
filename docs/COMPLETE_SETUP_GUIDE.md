# Complete Setup Guide

This guide is written for faculty and staff who have not used GitHub, a command line, Codex, or Codex plugins before. You do not need to learn Git or write code. The setup uses a few commands that can be copied exactly.

Allow 30–45 minutes for software setup. Begin the BYU license request at least three business days before the workshop, then complete Parts 1–6 after approval.

## What You Are Installing

You will install:

1. **Codex CLI**, used to install the department plugin and run preview-confirm-apply browser workflows.
2. **The ChatGPT desktop app**, used for the hands-on browser workflow.
3. **BYU Faculty Productivity**, the plugin containing the Learning Suite and Kuali skills.
4. **Chrome browser control**, used only when you ask Codex to inspect or update an authenticated BYU webpage. The CLI path uses a dedicated profile, preview-first task scripts, and explicit confirmation before writes.
5. **Visual Studio Code (optional)**, for faculty who want files, a terminal, and Codex in one window.

You do **not** need to clone the repository, understand Git branches, or write software.

## Part 1: Confirm Accounts And Access

### 1.1 Request BYU ChatGPT Edu/Codex access

BYU provides eligible CES faculty and staff access to ChatGPT Edu through its enterprise agreement with OpenAI. For this workshop, use the BYU-provided ChatGPT Edu account as your Codex sign-in rather than purchasing a personal subscription.

On August 26, 2026, the CES AI Committee announced that ChatGPT Edu users would be assigned credit tiers based on recent usage. Existing accounts, conversations, and access continue, and no action is required for the initial assignment. The tier determines the capacity available for some advanced capabilities; it does not replace the access-request and sign-in steps below.

Source: CES AI Committee email, “Your CES ChatGPT EDU Access is being updated,” August 26, 2026. Where this guide and a newer institutional notice differ, follow the newer CES or BYU guidance.

1. Open BYU's [Obtaining a ChatGPT Edu License](https://ai.byu.edu/obtaining-a-chatgpt-edu-license) page.
2. Select **Apply for a ChatGPT Edu License** or open the [CES license registration form](https://cestech.org/chatgpt-edu-registration).
3. Sign in with your institutional NetID or username.
4. Briefly describe your intended use and the type of data you expect to use.
5. Submit the form. BYU says applicants should receive a response within three business days.
6. After approval, look for both the CES approval message and the OpenAI invitation. If only the CES message arrives, follow the alternate login steps on BYU's license page.

Read the [BYU ChatGPT Edu Data Guidelines](https://ai.byu.edu/chatgpt-edu-data-restrictions-page) before using institutional, student, research, or proposal information.

### Account and data rule for this workshop

Use the **BYU CES ChatGPT Edu account** for BYU teaching, student, research, or proposal work. Do not use a personal Free, Plus, or Pro account for those workflows.

The CES account does not make every kind of data permissible. BYU's current guidelines say personally identifiable information—including names, photos, contact information, usernames, NetIDs, and student or employee ID numbers—must be de-identified unless the institutional AI Executive Committee explicitly approves the use. Restricted data, HIPAA-protected data, and controlled unclassified or export-controlled information also require explicit approval.

Opening a page for AI-assisted browser work can expose its visible content to the tool. Do not open rosters, gradebooks, accommodation records, student exceptions, or proposal pages containing prohibited data during the workshop. Use synthetic or de-identified examples.

### 1.2 Sign into the BYU account correctly

After approval:

1. Go to [chatgpt.com](https://chatgpt.com/). If another ChatGPT account is active, log out first.
2. Select **Log in**.
3. Enter `your-netid@byu.edu`, using the same NetID identity submitted on the registration form. BYU specifies that this is the NetID-based address, not an email alias.
4. Do **not** select the Google, Microsoft, or Apple social-login buttons.
5. Select **Church Educational System** when asked how to log in.
6. Select Brigham Young University and complete BYU single sign-on.
7. Confirm that the CES ChatGPT Edu workspace is available. Refresh the page if the confirmation does not appear immediately.

Do not share your password or multifactor-authentication code with Codex or another attendee.

### 1.3 Understand and monitor CES credits

Credits help CES allocate compute-intensive ChatGPT capabilities across faculty and staff. Everyday chat generally uses less capacity, while advanced work such as Deep Research, file and data analysis, image generation, and AI-agent workflows can use more. Codex workflows—including the Learning Suite and Kuali browser tasks in this tutorial—may count as advanced usage.

To review your own usage:

1. Open ChatGPT while signed into the CES workspace.
2. Select your profile.
3. Open **Settings → Usage**.
4. Review your current allocation and usage periodically, especially before a hands-on workshop or a substantial agent workflow.

CES describes the initial tier as a starting point rather than necessarily a permanent limit. If a legitimate work task is blocked by the assigned capacity, use the current institutional request process shown in ChatGPT or contact the campus ChatGPT administrators to request a temporary increase. Longer-term tier reviews may also be available when a role consistently requires more capacity. Approval and exact allocation are determined by CES or the institution; this guide cannot promise an increase.

Use advanced capabilities when they add meaningful value. A credit limit is a capacity issue, not a reason to switch BYU work to a personal ChatGPT account or bypass institutional data rules.

### 1.4 Public repository access

The plugin is published at:

<https://github.com/rmcamacho/byu-faculty-productivity>

The repository is public. You do not need a GitHub account, repository invitation, GitHub Desktop, or GitHub CLI to install the plugin. A GitHub account is useful only if you want to report an issue, contribute a change, or follow repository updates.

Opening the link in a private or signed-out browser window is a simple way to confirm public access.

## Part 2: Open A Command Window

Commands are short instructions typed into a text-based window.

- **Windows:** Open Start, type `PowerShell`, and open Windows PowerShell or Terminal.
- **macOS:** Open Applications → Utilities → Terminal.
- **Linux:** Open your distribution's Terminal application.

Paste one command at a time and press Enter. Do not include the surrounding backticks or copy a prompt character such as `$` or `>`.

## Part 3: Install And Sign Into Codex

The current official instructions are maintained in the [Codex CLI documentation](https://learn.chatgpt.com/docs/codex/cli).

### Windows

Paste this into PowerShell:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

### macOS or Linux

Paste this into Terminal:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Close and reopen the command window after installation. Then verify the installation:

```text
codex --version
```

You should see a Codex version number. Next run:

```text
codex
```

The first time Codex starts, choose **Sign in with ChatGPT** and use the approved BYU ChatGPT Edu account from Part 1. If another ChatGPT identity appears in the browser, sign out before continuing. Use `netid@byu.edu` and the **Church Educational System** SSO option as described above. Exit the interactive screen after sign-in if you wish; the exact exit shortcut is displayed in the interface.

Verify the login:

```text
codex login status
```

Optional diagnostic:

```text
codex doctor --summary
```

### Install the ChatGPT desktop app

The **ChatGPT desktop app** remains the simplest beginner path. Version 0.3 also supports preview-confirm-apply browser tasks through Codex CLI, including Codex CLI in VS Code's integrated terminal, as described in Part 6.

1. Follow the [official desktop app instructions](https://learn.chatgpt.com/docs/app) and install the app for your operating system.
2. Open the app and sign in with the approved BYU CES ChatGPT Edu account.
3. Select **Codex** when starting the tutorial workflow.

For this workshop, either the desktop app or the version 0.3 CLI browser workflow may be used for carefully reviewed interactive exercises. Always preview the exact action, confirm immediately before the write, and verify the saved result.

### Optional: Install Codex in VS Code

1. Install [Visual Studio Code](https://code.visualstudio.com/Download).
2. Open **Extensions** and install **Codex – OpenAI's coding agent**, published by OpenAI.
3. Open the Codex sidebar from its icon. If the icon is hidden, open the Command Palette and run **Codex: Open Codex Sidebar**.
4. Sign in with the approved BYU CES ChatGPT Edu identity.

The Codex IDE sidebar does not currently support plugins. To use `$byu-learning-suite` or `$byu-kuali-proposals` from VS Code, choose **Terminal → New Terminal**, run `codex`, and enter prompts in that integrated-terminal CLI session. See the complete [VS Code Workflow](VSCODE_WORKFLOW.md).

## Part 4: Confirm The Public Download

Open the public repository in a browser:

<https://github.com/rmcamacho/byu-faculty-productivity>

You should see the project README without signing into GitHub. That is all the GitHub access required for installation. Continue to Part 5 in the same Terminal or PowerShell window you used for Codex.

GitHub CLI is optional and is needed only by contributors who plan to work with branches or pull requests.

## Part 5: Install The Department Plugin

Add the public GitHub repository as a Codex marketplace:

```text
codex plugin marketplace add rmcamacho/byu-faculty-productivity --ref main
```

Install the plugin:

```text
codex plugin add byu-faculty-productivity@byu-faculty-productivity
```

Verify that it is installed and enabled:

```text
codex plugin list
```

Look for this line or equivalent information:

```text
byu-faculty-productivity@byu-faculty-productivity  installed, enabled
```

Codex loads newly installed plugin skills only in a **new** chat or CLI session. Close the current Codex conversation and start a new one before testing. This behavior is documented in the [official plugin guide](https://learn.chatgpt.com/docs/plugins).

## Part 6: Prepare Browser Access

The Learning Suite and Kuali workflows need an authenticated browser only when you ask Codex to inspect or change a live site.

Choose one of these modes:

- **Desktop mode (recommended for beginners):** connects Codex to Chrome through the ChatGPT desktop app and supports the skill's carefully confirmed interactive workflow.
- **CLI browser mode (version 0.3):** launches a separate Chrome profile for inspection and guarded, task-specific browser automation. Every task previews first and requires explicit confirmation before its apply run.

VS Code's integrated terminal uses the same CLI browser mode.

### Option A: Desktop mode

There are two different components:

- **BYU Faculty Productivity** supplies the Learning Suite and Kuali instructions. You installed it with Codex CLI in Part 5.
- **Chrome browser control** connects the desktop app to your normal Chrome windows. It requires the ChatGPT browser extension.

Use this pilot-tested sequence:

1. Open the **ChatGPT desktop app**, not the ChatGPT website in an ordinary browser tab.
2. In the desktop app, open **Plugins** and confirm that the required browser capability is installed and enabled.
3. Open **Settings → Computer use** in the desktop app and install or confirm the ChatGPT browser extension for Chrome.
4. Quit and reopen both Chrome and the ChatGPT desktop app after installing the extension.
5. Open Chrome yourself and sign into Learning Suite or Kuali, including BYU multifactor authentication.
6. Navigate to a safe page that does not show student PII or other prohibited data.
7. Start a new Codex conversation in the desktop app and run this connection test:

```text
Use Chrome. List the titles of my open tabs, but do not navigate, click, type, or change anything.
```

If Chrome is not detected, first confirm that the in-app Browser can open a nonsensitive public page. Then recheck **Settings → Computer use**, restart Chrome and the desktop app, and try the connection test again. Using the in-app Browser is a diagnostic step; it does not provide the signed-in state from your normal Chrome profile.

Never paste a BYU password, Duo code, browser cookie, recovery code, or API token into a prompt. Codex should work through the already authenticated browser session.

If Chrome browser control is unavailable, the skills can still help with local planning, documents, spreadsheets, and review. They must stop before live browser work.

### Option B: CLI browser mode

This mode is useful for faculty who prefer Terminal or PowerShell. It does not require the ChatGPT Chrome extension, and it does not use your everyday Chrome profile.

#### Install Node.js 22 or newer

Download a current LTS release from the [official Node.js download page](https://nodejs.org/en/download), install it, close and reopen the command window, and verify:

```text
node --version
```

The major version must be `22` or higher.

#### Let Codex start the dedicated browser

Start `codex`, then enter:

```text
Use $byu-learning-suite in CLI browser mode. Check the prerequisites and start the dedicated Chrome session. Do not inspect any page until I confirm that it contains no protected data.
```

A separate Chrome window opens with its own BYU Faculty Productivity profile. Sign into the BYU service yourself, complete multifactor authentication, and navigate to a safe page. Do not paste passwords, Duo codes, cookies, or tokens into Codex.

After checking that the page contains no student PII or other prohibited data, begin with a read-only inspection:

```text
The page is safe for this exercise. List the available page titles and origins, then structurally probe the Learning Suite page. Do not navigate, click, type, or change anything.
```

The probe reports limited page structure such as headings, button labels, and element counts. It does not expose cookies or make changes.

You can then describe varied outcomes in ordinary language. For example:

```text
Use $byu-learning-suite. In this course, change Quiz 5's due date to October 14, 2026. First show me the current and proposed values. Do not save until I explicitly confirm, and verify the result afterward.
```

Codex creates a small task-specific script in the workspace and runs it in preview mode. After you inspect the preview, reply with an explicit confirmation such as `Apply that one change`. Codex then runs the same task in apply mode and verifies the result. The framework is general; it is not limited to quiz dates or a fixed list of commands.

When finished, enter:

```text
Stop the dedicated CLI Chrome session.
```

The local browser-control port is available only on your computer, but any process running on that computer could control the dedicated window while it is open. Close it promptly after use. Its persistent profile contains browser state; never copy that profile into GitHub, Box, a support bundle, or a prompt.

## Part 7: Run Read-Only Verification Tests

Start a new Codex conversation and run these tests before touching a live course or proposal.

### Learning Suite skill

```text
Use $byu-learning-suite. Do not open a browser or change anything. Summarize the workflow's safety pattern and supported modes.
```

Expected result: Codex mentions inspection, a reviewable plan or diff, explicit confirmation before writes, and post-change verification.

### Kuali skill

```text
Use $byu-kuali-proposals. Do not open Kuali or change anything. Summarize the proposal workflow and the actions that require explicit authorization.
```

Expected result: Codex mentions canonical proposal files, compliance and budget coordination, and separate authorization for live changes, attachment replacement, certification, routing, approval, and submission.

If Codex says the skill does not exist, close the conversation completely and start another new conversation. Then check `codex plugin list` again.

## Part 8: Prepare For The Hands-On Exercises

### Learning Suite

- Use a development shell, future-term shell, or instructor-approved test course when possible.
- Do not use an active student course for the first live exercise.
- Begin with inspection and planning only.
- Verify the visible course title, term, section, and URL before approving any change.
- Never use real student names, grades, accommodations, or identifiers in shared workshop examples.

Recommended first prompt:

```text
Use $byu-learning-suite to inspect this course and prepare a setup summary. Do not save, publish, copy, delete, or modify anything.
```

### Kuali

- Use a draft or facilitator-approved proposal.
- Keep the solicitation, canonical drafts, and budget workbook in a proposal-specific folder.
- Begin with a read-only inventory or compliance matrix.
- Do not certify, route, approve, or submit during an introductory exercise.

Recommended first prompt:

```text
Use $byu-kuali-proposals to inventory this proposal folder and identify missing or inconsistent artifacts. Do not access or update Kuali yet.
```

## Part 9: Updating The Plugin

Refresh the GitHub marketplace:

```text
codex plugin marketplace upgrade byu-faculty-productivity
```

Then install the current marketplace version:

```text
codex plugin add byu-faculty-productivity@byu-faculty-productivity
```

Start a new Codex conversation after an update.

## Troubleshooting

### `codex` is not recognized or not found

- Close and reopen Terminal or PowerShell.
- Run `codex --version` again.
- If it still fails, rerun the official installer for your operating system.

### Public repository or marketplace is unavailable

- Open <https://github.com/rmcamacho/byu-faculty-productivity> in a signed-out or private browser window.
- If GitHub itself is unavailable on the network, retry from another approved network or later.
- Check the marketplace command for spelling and preserve `--ref main`.
- A GitHub login or repository invitation should not be requested. If one is, stop and report the exact command and message to the facilitator.

### Marketplace already exists

That is normally harmless. Continue with the plugin installation command. To refresh it, run:

```text
codex plugin marketplace upgrade byu-faculty-productivity
```

### Plugin is installed but the skill is unavailable

- Confirm `codex plugin list` shows it as `installed, enabled`.
- Start a completely new Codex chat or CLI session.
- Make sure the skill name includes the leading dollar sign when invoking it explicitly.
- If you are in the VS Code Codex sidebar, move to **Terminal → New Terminal** and run `codex`; the IDE extension does not currently support plugins.

### Credits or advanced features are unavailable

- In the CES ChatGPT workspace, open **Profile → Settings → Usage** and check the displayed allocation and usage.
- Confirm that the CES workspace—not a personal workspace—is active.
- If a legitimate BYU task is blocked by the available capacity, follow the current institutional request process or contact the campus ChatGPT administrators about a temporary increase.
- Continue ordinary work with available standard capabilities when appropriate; do not move institutional data to a personal account to avoid a limit.
- Credit tiers, rates, and request procedures may change. Follow the current CES notice and the information displayed in the workspace rather than relying on screenshots or numerical examples in older workshop materials.

### Browser control cannot see the signed-in page

- Use Codex in the ChatGPT desktop app for this tutorial, not only the CLI or ChatGPT website.
- In the desktop app, check **Plugins** and **Settings → Computer use**.
- Confirm the ChatGPT browser extension is installed and enabled in Chrome.
- Confirm Chrome is open on the correct BYU page.
- Restart both Chrome and the desktop app after extension installation.
- Start a new Codex conversation after installing a plugin.
- Run the read-only open-tab-title test from Part 6.
- Do not bypass BYU authentication or copy session cookies into Codex.

### CLI browser mode does not start

- Confirm `node --version` reports major version 22 or higher.
- Confirm Google Chrome—not only another Chromium-based browser—is installed.
- Start a new Codex CLI session after installing or updating the plugin.
- Ask Codex to run the CLI browser status check before starting another session.
- If port 9222 is already in use, ask Codex to use another local port for start, list, probe, and stop.
- Never solve a connection problem by enabling remote debugging on your normal Chrome profile.

### CLI browser task previews but does not apply

- Run `codex plugin list` and confirm version 0.3 or newer is installed.
- Review the preview and give explicit confirmation immediately before the write.
- If the target page changed after preview, ask Codex to inspect and preview again.
- Do not ask Codex to bypass safeguards involving cookies, storage, direct network calls, passwords, MFA, prohibited data, or Kuali institutional actions.

### A page or prompt does not match the tutorial

Stop before clicking a consequential control. Software interfaces change. Ask Codex to describe the visible page and compare it with the intended step. Do not repeatedly retry Copy, Save, Publish, Route, Approve, or Submit.

## Privacy And Responsible Use

- Follow BYU policy and the requirements of your unit and data owner.
- Use the BYU CES ChatGPT Edu identity for BYU work, not a personal ChatGPT account.
- De-identify PII unless the institutional AI Executive Committee has explicitly approved the use.
- Do not expose restricted, HIPAA-protected, controlled unclassified, or export-controlled information without explicit institutional approval.
- Keep student educational records out of GitHub, prompts, screenshots, tutorial files, and AI-controlled browser pages unless their use is specifically authorized.
- Keep confidential proposal drafts, budgets, reviewer information, credentials, and browser data out of the plugin repository.
- Use synthetic data in demonstrations.
- Review every proposed change. The instructor or authorized proposal official remains responsible for the final action.

## Facilitator Pre-Workshop Checklist

- [ ] Send attendees the public [Start Here](../START_HERE.md) link.
- [ ] Send the BYU ChatGPT Edu application link at least three business days before the workshop.
- [ ] Ask attendees to confirm approval and CES workspace access before installing the plugin.
- [ ] Ask attendees to open **Profile → Settings → Usage** and become familiar with their assigned capacity before the workshop.
- [ ] Identify the current campus contact or request process for legitimate temporary credit increases.
- [ ] Ask attendees to complete Parts 1–7 before the workshop.
- [ ] Verify installation from an account other than the repository owner's.
- [ ] Prepare a synthetic Learning Suite example or a safe development shell.
- [ ] Prepare a synthetic solicitation, narrative, and budget for the Kuali exercise.
- [ ] Do not schedule certification, routing, approval, submission, grade changes, or student-data work as beginner exercises.
- [ ] Have at least one helper available for Windows and one for macOS/Linux setup.
- [ ] Confirm that the repository and installation link still open in a signed-out browser window.
