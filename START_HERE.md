# Start Here: BYU Faculty Productivity

This public Codex plugin helps BYU faculty use natural-language prompts for carefully reviewed Learning Suite and Kuali work. You do not need a GitHub account, GitHub Desktop, or GitHub CLI. Allow about 30–45 minutes for first-time setup.

## Before You Begin

1. Request BYU CES ChatGPT Edu access from [BYU's license page](https://ai.byu.edu/obtaining-a-chatgpt-edu-license). Begin at least three business days before you need it.
2. Read the [BYU ChatGPT Edu Data Guidelines](https://ai.byu.edu/chatgpt-edu-data-restrictions-page).
3. Use your approved CES account—not a personal ChatGPT account—for BYU teaching, student, research, or proposal work.
4. Do not use real rosters, grades, accommodations, student identifiers, credentials, or restricted proposal data in a first test.

## Install Codex

Open PowerShell on Windows or Terminal on macOS/Linux.

Windows:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

macOS or Linux:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Close and reopen the command window, run `codex`, and choose **Sign in with ChatGPT**. Use your approved BYU CES ChatGPT Edu account.

## Install The Department Plugin

Copy these commands one at a time:

```text
codex plugin marketplace add rmcamacho/byu-faculty-productivity --ref main
codex plugin add byu-faculty-productivity@byu-faculty-productivity
codex plugin list
```

No repository invitation or GitHub sign-in is required. Close Codex and start a new session after installation.

## Run A Safe First Test

Start `codex`, then enter:

```text
Use $byu-learning-suite. Do not open a browser or change anything. Summarize the workflow's safety pattern and supported modes.
```

Then test the Kuali workflow:

```text
Use $byu-kuali-proposals. Do not open Kuali or change anything. Summarize the workflow and the actions that require explicit authorization.
```

Codex should describe an inspect, preview, confirm, apply, and verify process.

## Choose How To Work

- **Beginner:** use the ChatGPT desktop app and follow the browser setup in the [Complete Setup Guide](docs/COMPLETE_SETUP_GUIDE.md#part-6-prepare-browser-access).
- **VS Code:** run `codex` in VS Code's integrated terminal; the Codex sidebar does not currently load plugins. Follow the [VS Code Workflow](docs/VSCODE_WORKFLOW.md).
- **Terminal or PowerShell:** install Node.js 22 or newer and use the plugin's dedicated CLI browser mode as described in the [Complete Setup Guide](docs/COMPLETE_SETUP_GUIDE.md#option-b-cli-browser-mode).

For troubleshooting, account guidance, CES credit information, browser setup, and workshop safety rules, use the [Complete Setup Guide](docs/COMPLETE_SETUP_GUIDE.md).
