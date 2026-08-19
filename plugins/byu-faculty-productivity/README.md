# BYU Faculty Productivity for Codex

This portable Codex plugin provides two reusable workflows:

- **BYU Learning Suite:** inspect, plan, copy, configure, and safely update a course through an authenticated browser.
- **BYU Kuali Proposals:** organize proposal development, synchronize artifacts and budgets, and carefully update a Kuali record.

The plugin contains no course IDs, student records, proposal content, passwords, cookies, or browser profiles. Each faculty member supplies their own files and authenticated browser session.

## Design

Both workflows use the same safety pattern:

1. inspect the current state;
2. create a human-readable plan or diff;
3. verify the target and resolve material ambiguity;
4. preview the exact change;
5. obtain confirmation immediately before the live write;
6. apply a small change set;
7. verify that it persisted.

## Requirements

- Codex with local-file access.
- Authenticated browser control for live Learning Suite or Kuali work.
- Access to the relevant BYU course or proposal.
- The faculty member remains responsible for reviewing changes and performing actions reserved to authorized institutional roles.

## Example Prompts

- “Use `$byu-learning-suite` to compare my prior course with the new shell and draft a setup plan. Do not change anything yet.”
- “Use `$byu-learning-suite` to review these proposed due dates against the term calendar, preview the changes, and wait for confirmation before saving.”
- “Use `$byu-kuali-proposals` to read this solicitation and build a compliance matrix and proposal workspace.”
- “Use `$byu-kuali-proposals` to compare my local upload files with this Kuali record. Preview any needed replacements but do not apply them yet.”

## Development Note

The original ECEN 240 Learning Suite scripts are development inputs, not distributable examples. Course-specific scripts, snapshots, rosters, and absolute personal paths must remain outside this plugin.
