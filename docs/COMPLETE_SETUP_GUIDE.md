# Complete Setup Guide

This guide is written for faculty and staff who have not used GitHub, a command line, Codex, or Codex plugins before. You do not need to learn Git or write code. The setup uses a few commands that can be copied exactly.

Allow 30–45 minutes the first time. Complete Parts 1–6 before the workshop if possible.

## What You Are Installing

You will install:

1. **Codex**, the AI work environment that will follow the tutorial workflows.
2. **GitHub CLI**, a small utility that gives Codex permission to download the department's private plugin repository.
3. **BYU Faculty Productivity**, the plugin containing the Learning Suite and Kuali skills.
4. **Chrome browser control**, used only when you ask Codex to inspect or update an authenticated BYU webpage.

You do **not** need to clone the repository, understand Git branches, or write software.

## Part 1: Confirm Accounts And Access

### 1.1 ChatGPT/Codex access

You need a ChatGPT account that can use Codex. If your BYU unit provides a managed account, use that account and follow its data-handling requirements.

Open [chatgpt.com](https://chatgpt.com/) and verify that you can sign in. Do not share your password or multifactor-authentication code with Codex or another attendee.

### 1.2 GitHub access

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

The first time Codex starts, choose **Sign in with ChatGPT** and complete the browser sign-in. Exit the interactive screen after sign-in if you wish; the exact exit shortcut is displayed in the interface.

Verify the login:

```text
codex login status
```

Optional diagnostic:

```text
codex doctor --summary
```

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

1. In the ChatGPT desktop app or Codex plugin browser, open **Plugins**.
2. Install or enable the **Chrome** browser-control plugin if it is available in your environment.
3. Open Chrome yourself.
4. Sign into Learning Suite or Kuali yourself, including BYU multifactor authentication.
5. Navigate to the course or proposal you intend to use.

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

- Confirm Chrome is open on the correct BYU page.
- Confirm the Chrome browser-control plugin is installed and enabled.
- Start a new Codex conversation after installing a plugin.
- Ask Codex to identify the visible page without changing it.
- Do not bypass BYU authentication or copy session cookies into Codex.

### A page or prompt does not match the tutorial

Stop before clicking a consequential control. Software interfaces change. Ask Codex to describe the visible page and compare it with the intended step. Do not repeatedly retry Copy, Save, Publish, Route, Approve, or Submit.

## Privacy And Responsible Use

- Follow BYU policy and the requirements of your unit and data owner.
- Keep student educational records out of GitHub, shared prompts, screenshots, and tutorial files.
- Keep confidential proposal drafts, budgets, reviewer information, credentials, and browser data out of the plugin repository.
- Use synthetic data in demonstrations.
- Review every proposed change. The instructor or authorized proposal official remains responsible for the final action.

## Facilitator Pre-Workshop Checklist

- [ ] Invite each attendee's correct GitHub username to the private repository.
- [ ] Ask attendees to complete Parts 1–7 before the workshop.
- [ ] Verify installation from an account other than the repository owner's.
- [ ] Prepare a synthetic Learning Suite example or a safe development shell.
- [ ] Prepare a synthetic solicitation, narrative, and budget for the Kuali exercise.
- [ ] Do not schedule certification, routing, approval, submission, grade changes, or student-data work as beginner exercises.
- [ ] Have at least one helper available for Windows and one for macOS/Linux setup.
- [ ] Decide whether the repository should remain private or become public before broader distribution.
