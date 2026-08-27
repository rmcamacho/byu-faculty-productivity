# BYU Faculty AI Productivity Tutorial

Hands-on materials for BYU faculty learning to use Codex for administrative analysis, course design, Google Slides, homework development, grant opportunities, Learning Suite, and Kuali.

> **New here? Start with the [Self-Guided One-Hour Tutorial](tutorial_materials/SELF_GUIDED_TUTORIAL.md).** It includes setup links, exact prompts, synthetic practice files, answer checkpoints, safety guidance, and fallbacks. No GitHub account or Git experience is required.

## Choose Your Path

- **Work through the tutorial independently:** [Self-Guided One-Hour Tutorial](tutorial_materials/SELF_GUIDED_TUTORIAL.md)
- **Prepare for a live department session:** [Participant Handout and Schedule](tutorial_materials/README.md)
- **Set up Codex for the first time:** [Start Here](START_HERE.md), followed by the [Complete Setup Guide](docs/COMPLETE_SETUP_GUIDE.md) if needed
- **Use Google Slides:** [Google Drive Connector Setup](docs/GOOGLE_DRIVE_CONNECTOR_SETUP.md)
- **Use VS Code:** [VS Code Workflow](docs/VSCODE_WORKFLOW.md)
- **Install only the Learning Suite and Kuali tools:** continue to [Install From GitHub](#install-from-github)

## What Is Included

The tutorial includes complete synthetic workspaces for:

- reconciling department and college documents about BYU's General Education redesign;
- applying ideas from Elder Gong's University Conference address to an ECEn 240/301 op-amp unit;
- inspecting a Google Slides deck and safely editing a copy;
- auditing technical solutions and creating additional homework;
- defining a faculty research direction, checking a funding opportunity, and drafting a proposal concept;
- previewing natural-language Learning Suite and Kuali workflows.

The repository is also a portable Codex plugin marketplace for BYU Learning Suite course administration and Kuali proposal development. It works from Codex CLI on macOS, Windows, and Linux.

This is a community-maintained productivity aid unless and until it is formally adopted by BYU or a BYU unit. It does not replace university policy, sponsored-project guidance, accessibility requirements, or instructor review.

CES ChatGPT Edu assigns credit tiers for advanced capabilities, including agent workflows. Existing access continues, but users should monitor **ChatGPT → Profile → Settings → Usage** and follow the institutional process if legitimate work requires a temporary increase. See [Part 1 of the Complete Setup Guide](docs/COMPLETE_SETUP_GUIDE.md#part-1-confirm-accounts-and-access).

## Included Skills

- `$byu-learning-suite` helps inspect, plan, copy, configure, and safely update a Learning Suite course.
- `$byu-kuali-proposals` helps organize proposal workspaces, review requirements, coordinate budgets and attachments, and carefully update Kuali records.

Neither skill contains credentials, course identifiers, student records, proposal data, or user-specific paths. Live work uses each faculty member's own authenticated browser session and institutional access.

## Install From GitHub

Add this public repository directly as a Codex marketplace. A GitHub account or repository invitation is not required:

```text
codex plugin marketplace add rmcamacho/byu-faculty-productivity --ref main
codex plugin add byu-faculty-productivity@byu-faculty-productivity
```

Start a new Codex conversation after installation so the skills are discovered.

## Browser Modes

- The ChatGPT desktop app is the recommended beginner path and supports carefully confirmed interactive browser work.
- Plugin version 0.3 adds a Codex CLI mode that launches a dedicated Chrome profile, performs read-only discovery, and runs varied task-specific browser scripts through separate preview and apply phases.

CLI browser mode requires Node.js 22 or newer and Google Chrome. It does not require the ChatGPT Chrome extension. See [Part 6 of the Complete Setup Guide](docs/COMPLETE_SETUP_GUIDE.md#part-6-prepare-browser-access).

## VS Code

Run Codex CLI in VS Code's integrated terminal to use this plugin. OpenAI's current IDE extension does not load plugins, although the Codex sidebar remains useful for ordinary file work. The [VS Code workflow guide](docs/VSCODE_WORKFLOW.md) includes setup, verification, prompt examples, and the general preview-confirm-apply-verify workflow.

## Test A Local Clone

From the repository root:

```text
python scripts/validate_repo.py
node --test tests/cli_tools.test.mjs
codex plugin marketplace add .
codex plugin add byu-faculty-productivity@byu-faculty-productivity
```

These commands are shell-neutral; run them in Terminal, PowerShell, or another command prompt where `python` and `codex` are available. If Windows exposes Python as `py`, use `py scripts/validate_repo.py` for validation.

## Safe First Prompts

```text
Use $byu-learning-suite to inspect my new course shell and prepare a setup plan. Do not change anything yet.
```

```text
Use $byu-kuali-proposals to inventory this proposal folder and build a compliance matrix. Do not update Kuali yet.
```

## Repository Layout

```text
.agents/plugins/marketplace.json       Codex marketplace catalog
plugins/byu-faculty-productivity/      Installable plugin
  scripts/                             CLI browser lifecycle and task runner
scripts/validate_repo.py               Cross-platform validation
tests/                                 Cross-platform CLI tool tests
ci/github-actions-validate.yml.example Windows, macOS, and Linux CI template
```

## Privacy

Do not commit live snapshots, rosters, grades, accommodations, proposal drafts, budgets, credentials, cookies, or browser-profile data. Use synthetic examples for demonstrations and issues.

## Public Repository Maintenance

1. Run `python scripts/validate_repo.py` and `node --test tests/cli_tools.test.mjs` before each release.
2. Review the staged file list and reachable Git history for institutional, personal, or secret data.
3. Test the public installation commands without repository-owner credentials.
4. Confirm an appropriate license with BYU before granting broader reuse or redistribution rights. Public visibility alone does not create an open-source license.

To enable GitHub Actions, copy `ci/github-actions-validate.yml.example` to `.github/workflows/validate.yml`. The publishing credential must have permission to create workflow files.
