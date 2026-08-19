# Complete Setup Guide

This guide is written for faculty and staff who have not used GitHub, a command line, Codex, or Codex plugins before. You do not need to learn Git or write code. The setup uses a few commands that can be copied exactly.

Allow 30–45 minutes for software setup. Begin the BYU license request at least three business days before the workshop, then complete Parts 1–6 after approval.

## What You Are Installing

You will install:

1. **Codex CLI**, used to install the private department plugin.
2. **The ChatGPT desktop app**, used for the hands-on browser workflow.
3. **GitHub CLI**, a small utility that gives Codex permission to download the department's private plugin repository.
4. **BYU Faculty Productivity**, the plugin containing the Learning Suite and Kuali skills.
5. **Chrome browser control**, used only when you ask Codex to inspect or update an authenticated BYU webpage.

You do **not** need to clone the repository, understand Git branches, or write software.

## Part 1: Confirm Accounts And Access

### 1.1 Request BYU ChatGPT Edu/Codex access

BYU provides eligible CES faculty and staff access to ChatGPT Edu through its enterprise agreement with OpenAI. Licenses are shared across CES institutions, approval depends on availability, and the program is not available to students. For this workshop, use the BYU-provided ChatGPT Edu account as your Codex sign-in rather than purchasing a personal subscription.

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

### 1.3 GitHub access

The plugin repository is currently private. You therefore need:

- a free GitHub account;
- a verified email address;
- an invitation to `rmcamacho/byu-faculty-productivity`.

If you need an account, follow GitHub's [account creation instructions](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github). Enable two-factor authentication and save the recovery codes somewhere secure.

After receiving the repository invitation, sign into GitHub in a browser and open:

<https://github.com/rmcamacho/byu-faculty-productivity>

If the page says “Not Found,” stop and ask the workshop facilitator to confirm your GitHub username and repository access.

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

The command-line interface is useful for installing and verifying the private plugin. The tested path for controlling an authenticated Chrome window is the **ChatGPT desktop app**.

1. Follow the [official desktop app instructions](https://learn.chatgpt.com/docs/app) and install the app for your operating system.
2. Open the app and sign in with the approved BYU CES ChatGPT Edu account.
3. Select **Codex** when starting the tutorial workflow.

For this workshop, do not plan on using Codex CLI for the live browser exercise. The CLI can install the marketplace and run the read-only skill verification, but the authenticated Chrome workflow has been pilot-tested in the desktop app.

## Part 4: Install And Sign Into GitHub CLI

GitHub CLI is required only because the repository is private. It securely supplies your GitHub authorization when Codex downloads the plugin.

Use the installer for your operating system from the [GitHub CLI installation page](https://github.com/cli/cli#installation).

Common options include:

- **Windows with WinGet:** `winget install --id GitHub.cli`
- **macOS with Homebrew:** `brew install gh`
- **Linux:** use the distribution-specific instructions on the installation page.

Close and reopen the command window, then verify:

```text
gh --version
```

Sign in:

```text
gh auth login
```

Choose:

1. `GitHub.com`;
2. `HTTPS` for the Git protocol;
3. browser-based authentication when offered;
4. `Yes` when asked whether GitHub CLI should authenticate Git operations.

GitHub documents this flow in its [GitHub CLI quickstart](https://docs.github.com/en/github-cli/github-cli/quickstart).

Verify both authentication and repository access:

```text
gh auth status
gh repo view rmcamacho/byu-faculty-productivity
```

The second command should display the repository description rather than “not found.”

## Part 5: Install The Department Plugin

Add the private GitHub repository as a Codex marketplace:

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

### `gh` is not recognized or not found

- Close and reopen Terminal or PowerShell.
- Confirm that GitHub CLI—not only GitHub Desktop—was installed.
- Revisit the [GitHub CLI installation page](https://github.com/cli/cli#installation).

### Repository not found

Run:

```text
gh auth status
gh repo view rmcamacho/byu-faculty-productivity
```

Common causes are a missing repository invitation, signing into the wrong GitHub account, or not completing browser authorization. If multiple GitHub accounts are configured, use `gh auth switch`.

### Marketplace already exists

That is normally harmless. Continue with the plugin installation command. To refresh it, run:

```text
codex plugin marketplace upgrade byu-faculty-productivity
```

### Plugin is installed but the skill is unavailable

- Confirm `codex plugin list` shows it as `installed, enabled`.
- Start a completely new Codex chat or CLI session.
- Make sure the skill name includes the leading dollar sign when invoking it explicitly.

### Browser control cannot see the signed-in page

- Use Codex in the ChatGPT desktop app for this tutorial, not only the CLI or ChatGPT website.
- In the desktop app, check **Plugins** and **Settings → Computer use**.
- Confirm the ChatGPT browser extension is installed and enabled in Chrome.
- Confirm Chrome is open on the correct BYU page.
- Restart both Chrome and the desktop app after extension installation.
- Start a new Codex conversation after installing a plugin.
- Run the read-only open-tab-title test from Part 6.
- Do not bypass BYU authentication or copy session cookies into Codex.

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

- [ ] Invite each attendee's correct GitHub username to the private repository.
- [ ] Send the BYU ChatGPT Edu application link at least three business days before the workshop.
- [ ] Ask attendees to confirm approval and CES workspace access before installing the plugin.
- [ ] Ask attendees to complete Parts 1–7 before the workshop.
- [ ] Verify installation from an account other than the repository owner's.
- [ ] Prepare a synthetic Learning Suite example or a safe development shell.
- [ ] Prepare a synthetic solicitation, narrative, and budget for the Kuali exercise.
- [ ] Do not schedule certification, routing, approval, submission, grade changes, or student-data work as beginner exercises.
- [ ] Have at least one helper available for Windows and one for macOS/Linux setup.
- [ ] Decide whether the repository should remain private or become public before broader distribution.
