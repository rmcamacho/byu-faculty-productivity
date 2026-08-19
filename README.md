# BYU Faculty Productivity Codex Plugin

Portable Codex workflows for BYU Learning Suite course administration and Kuali proposal development. The repository is a Codex plugin marketplace and works from the Codex CLI on macOS, Windows, and Linux.

This is a community-maintained productivity aid unless and until it is formally adopted by BYU or a BYU unit. It does not replace university policy, sponsored-project guidance, accessibility requirements, or instructor review.

## Included Skills

- `$byu-learning-suite` helps inspect, plan, copy, configure, and safely update a Learning Suite course.
- `$byu-kuali-proposals` helps organize proposal workspaces, review requirements, coordinate budgets and attachments, and carefully update Kuali records.

Neither skill contains credentials, course identifiers, student records, proposal data, or user-specific paths. Live work uses each faculty member's own authenticated browser session and institutional access.

## Install From GitHub

With access to this private repository, add it directly as a Codex marketplace:

```text
codex plugin marketplace add rmcamacho/byu-faculty-productivity --ref main
codex plugin add byu-faculty-productivity@byu-faculty-productivity
```

Start a new Codex conversation after installation so the skills are discovered.

## Test A Local Clone

From the repository root:

```text
python scripts/validate_repo.py
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
scripts/validate_repo.py               Cross-platform validation
ci/github-actions-validate.yml.example Windows, macOS, and Linux CI template
```

## Privacy

Do not commit live snapshots, rosters, grades, accommodations, proposal drafts, budgets, credentials, cookies, or browser-profile data. Use synthetic examples for demonstrations and issues.

## Publishing Checklist

1. Choose a GitHub owner, repository name, visibility, and license.
2. Run `python scripts/validate_repo.py`.
3. Review the staged file list for institutional or personal data.
4. Publish the repository.
5. Test the GitHub installation commands in a clean Codex environment.

To enable GitHub Actions, copy `ci/github-actions-validate.yml.example` to `.github/workflows/validate.yml`. The publishing credential must have permission to create workflow files.
