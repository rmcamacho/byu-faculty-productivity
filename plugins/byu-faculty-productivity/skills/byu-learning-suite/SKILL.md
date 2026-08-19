---
name: byu-learning-suite
description: Inspect, plan, copy, configure, and safely update a BYU Learning Suite course through an authenticated browser. Use for course-shell setup, syllabus and schedule work, assignment dates or settings, and course comparisons. Do not use for grading judgments, personal-account handling of BYU data, or student PII unless institutionally approved.
---

# BYU Learning Suite

Help an instructor turn a current or prior Learning Suite course into a reviewed plan and, when authorized, apply that plan to the correct course shell.

## Preconditions

- Use an authenticated browser session supplied by the instructor. Never request, record, or distribute BYU passwords, cookies, MFA codes, or browser-profile data.
- Use the BYU CES ChatGPT Edu identity for BYU work. Do not use a personal ChatGPT account for institutional, teaching, or student data.
- Identify the target course by visible title, term, section, and URL before proposing any write.
- Treat opening a browser page as data access. Do not inspect or process names, photos, contact details, usernames, NetIDs, student IDs, rosters, grades, accommodations, or individual exceptions unless the institutional AI Executive Committee has explicitly approved that use. De-identify PII whenever possible.
- If authenticated browser control is unavailable, stop before live work and help the instructor establish it.

## Workflow

1. Establish the instructor's goal and distinguish the source course from the destination course.
2. Inspect the relevant pages and summarize the current state. Do not mutate during discovery.
3. Create a local, human-readable plan or diff. Include the target course, affected items, proposed values, exclusions, and unresolved ambiguities.
4. Validate dates against the intended term, meeting pattern, holidays, reading days, and exam period. Ask only about ambiguities that could materially change the course.
5. Preview the exact live changes and obtain explicit confirmation immediately before applying them.
6. Apply the smallest coherent change set. Prefer native edit dialogs and built-in save controls.
7. Re-open or re-read the affected page and report which changes persisted and which did not.
8. Save reusable planning artifacts outside the plugin package; do not add live course exports or student data to the installed skill.

## Supported Modes

- For course copy and initial shell setup, read [references/course-setup.md](references/course-setup.md).
- For schedules, assignments, syllabi, and course comparisons, read [references/course-planning.md](references/course-planning.md).
- For any request involving rosters, grades, accommodations, individual exceptions, or student identifiers, read [references/student-data.md](references/student-data.md) before opening the relevant file or page.
- When the user asks to work from Codex CLI, read [CLI Browser Mode](../../references/cli-browser.md). Use read-only probing for discovery and [Adaptive Browser Task Scripts](../../references/browser-task-scripts.md) for varied preview-confirm-apply-verify operations.
- When the user asks to work from VS Code, read [VS Code Workflow](../../references/vscode-workflow.md) to distinguish the plugin-capable integrated terminal from the IDE sidebar.

## Safety Invariants

- Inspection and dry runs are the default.
- Never infer authorization to click Copy, Save, Publish, Delete, submit grades, message students, or change an individual exception.
- Never reuse a course ID, section, date, or instructor name from an example.
- Preserve content not named in the approved plan.
- Stop when the visible course identity conflicts with the approved target or the page state differs materially from the preview.
