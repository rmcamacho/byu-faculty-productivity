---
name: byu-learning-suite
description: Inspect, plan, copy, configure, and safely update a BYU Learning Suite course through an authenticated browser. Use for course-shell setup, syllabus and schedule work, assignment dates or settings, course comparisons, and roster exports. Do not use for grading judgments or sending messages on an instructor's behalf unless explicitly requested.
---

# BYU Learning Suite

Help an instructor turn a current or prior Learning Suite course into a reviewed plan and, when authorized, apply that plan to the correct course shell.

## Preconditions

- Use an authenticated browser session supplied by the instructor. Never request, record, or distribute BYU passwords, cookies, MFA codes, or browser-profile data.
- Identify the target course by visible title, term, section, and URL before proposing any write.
- Treat rosters, accommodations, grades, and student identifiers as private educational records. Keep them out of plugin files, examples, and shared tutorial artifacts.
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
- For roster export or individual exceptions, read [references/student-data.md](references/student-data.md).

## Safety Invariants

- Inspection and dry runs are the default.
- Never infer authorization to click Copy, Save, Publish, Delete, submit grades, message students, or change an individual exception.
- Never reuse a course ID, section, date, or instructor name from an example.
- Preserve content not named in the approved plan.
- Stop when the visible course identity conflicts with the approved target or the page state differs materially from the preview.
