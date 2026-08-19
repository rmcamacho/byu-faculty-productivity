# Using BYU Faculty Productivity From VS Code

VS Code can be a convenient home for course and proposal work because it keeps files, a terminal, and Codex in one window. For this department plugin, run Codex CLI in VS Code's integrated terminal.

The distinction matters:

- The **Codex VS Code extension** provides a Codex sidebar for ordinary local-file work.
- The **Codex CLI in the integrated terminal** supports the installed BYU Faculty Productivity plugin and its `$byu-learning-suite` and `$byu-kuali-proposals` skills.

OpenAI's current documentation says the IDE extension does not support plugins. Installing the extension is still useful, but use the integrated terminal for the workflows in this repository.

## One-Time Setup

1. Complete Parts 1–5 of the [Complete Setup Guide](COMPLETE_SETUP_GUIDE.md). This installs Codex CLI, GitHub CLI, and the department plugin.
2. Install [Visual Studio Code](https://code.visualstudio.com/Download).
3. In VS Code, open **Extensions** and install **Codex – OpenAI's coding agent**, published by OpenAI. The official installation link is available in the [OpenAI Codex IDE documentation](https://learn.chatgpt.com/docs/codex/ide).
4. Select the Codex icon. If it is hidden, open the Command Palette and run **Codex: Open Codex Sidebar**.
5. Sign into the extension with the approved BYU CES ChatGPT Edu identity. Do not use a personal ChatGPT account for BYU work.

The extension and the integrated-terminal CLI should both use the BYU CES identity, but they are separate interfaces. Verify the CLI identity in the terminal with:

```text
codex login status
```

## Open A Safe Workspace

Create a local folder for the course or proposal, then choose **File → Open Folder** in VS Code. Keep this folder free of rosters, grades, accommodations, student identifiers, credentials, browser profiles, and restricted proposal data.

The folder can contain de-identified planning files such as:

- a course calendar or proposed due-date CSV;
- a syllabus draft;
- a synthetic demonstration dataset;
- a solicitation, compliance matrix, or approved proposal drafts.

Do not clone or copy browser-profile data into the workspace.

## Start The Plugin Workflow

1. Choose **Terminal → New Terminal**.
2. Refresh and install the current plugin version when needed:

```text
codex plugin marketplace upgrade byu-faculty-productivity
codex plugin add byu-faculty-productivity@byu-faculty-productivity
```

3. Start Codex CLI in that same terminal:

```text
codex
```

4. Start a new CLI conversation after installing or upgrading the plugin.
5. Verify skill discovery:

```text
Use $byu-learning-suite. Do not open a browser or change anything. Summarize the workflow's safety pattern and supported modes.
```

## Natural-Language Course Workflow

Faculty should describe the desired outcome, not construct shell commands. Codex should choose the appropriate installed skill and tools, inspect the current state, preview the exact change, wait for confirmation, apply only the approved change, and verify the saved result.

A good prompt is:

```text
Use $byu-learning-suite. In EC EN 240, change the due date of Quiz 5 to October 14, 2026. First verify the visible course, find the exact assignment, and show me the current and proposed values. Do not save anything until I explicitly confirm. After saving, reopen the assignment and verify the date.
```

Replace the example course, assignment, and date with the real target. Include the year and identify the course by title, term, and section when possible.

The expected interaction is:

1. Codex identifies the target course and assignment.
2. Codex reports the current value and a one-change preview.
3. You review the target and proposed date.
4. You reply with an explicit confirmation such as `Apply that one change`.
5. Codex uses the shared browser-task runner to apply the approved task script.
6. Codex reopens or rereads the assignment and reports whether the new date persisted.

Do not treat the first prompt as permission to skip the preview. If the title is duplicated, the term or section is unclear, or related scheduling fields conflict, Codex should stop and ask for clarification.

## How The General Tools Work

Version 0.3 is not limited to predefined commands such as `change quiz date`. It provides:

- a dedicated authenticated Chrome session;
- read-only page discovery and structural inspection;
- a guarded runner for small task-specific browser scripts;
- separate preview and apply phases;
- post-change verification.

Codex writes the small task script from the requested outcome and the actual safe page. Faculty interact through prompts and confirmation; they do not need to write JavaScript or run the browser commands themselves. The same framework can support course setup, assignment settings, schedule editing, syllabus work, Kuali field updates, and attachment preparation when the visible interface and the user's authorization permit the action.

The runner rejects common attempts to access cookies, browser storage, or make direct network calls. It uses the visible page and native controls. This guardrail does not make every operation permissible: student-data rules and the Kuali certification, routing, approval, and submission boundaries still apply.

## Useful Prompt Patterns

Read-only inspection:

```text
Use $byu-learning-suite to inspect this course's assignments and list scheduling conflicts. Do not change anything.
```

Prepare several changes without applying them:

```text
Use $byu-learning-suite to compare these proposed quiz dates with the live course. Produce a review table of current and proposed values. Do not save anything.
```

Kuali file preparation:

```text
Use $byu-kuali-proposals to inventory this proposal folder and build a compliance matrix. Do not access or update Kuali yet.
```

## Troubleshooting

### The Codex sidebar cannot find `$byu-learning-suite`

That is expected with the current IDE extension because it does not support plugins. Open **Terminal → New Terminal**, run `codex`, and enter the prompt in the Codex CLI session.

### The CLI cannot find the skill

Run `codex plugin list`, confirm the plugin is installed and enabled, then exit Codex and start a new CLI session.

### Codex previews but does not apply

Confirm that plugin version 0.3 or newer is installed, then make sure the preview identifies the correct target and exact proposed action. Codex must receive an explicit confirmation before it reruns the generated task with `--apply`. If the page changed after preview or the task falls outside the allowed boundaries, Codex should stop rather than apply it.
