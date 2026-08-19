---
name: byu-kuali-proposals
description: Develop BYU sponsored-research proposal materials and safely update Kuali proposal records. Use for FOA intake, compliance matrices, narrative and budget coordination, attachment preparation, proposal-state tracking, and small verified Kuali changes. Do not use for institutional approval, certification, or submission decisions that belong to authorized personnel.
---

# BYU Kuali Proposals

Keep proposal content, budgets, upload files, and the live Kuali record synchronized without treating Kuali as the only source of truth.

## Start With the Workspace

1. Use the BYU CES ChatGPT Edu identity for BYU proposal work, not a personal ChatGPT account.
2. Before opening proposal files or Kuali, screen for PII, restricted data, HIPAA-protected data, controlled unclassified information, and export-controlled material. Do not access those categories without explicit institutional AI Executive Committee approval; de-identify PII whenever possible.
3. Identify the proposal folder, solicitation and amendments, canonical drafts, budget workbook, and current state file.
4. If the workspace has a local playbook or instructions, read them before changing files or the live record.
5. Verify date-sensitive sponsor requirements against current official sources when the user asks for current guidance or a deadline could have changed.

## Proposal Workflow

1. Extract eligibility, deadlines, required documents, page limits, review criteria, budget rules, and submission requirements from the solicitation and amendments.
2. Build or refresh a compliance matrix keyed to the actual reviewer questions.
3. Draft or revise canonical source files. Mark missing facts and uncertain claims rather than inventing them.
4. Keep the budget workbook, budget justification, cost-share logic, and narrative numbers consistent.
5. Review against the official criteria and resolve high-risk gaps before creating upload files.
6. Generate final upload artifacts from the canonical sources and verify their contents and layout.
7. Update the proposal state file with the proposal number, current artifacts, Kuali sync status, and remaining actions.

## Kuali Updates

For any live Kuali work, read [references/kuali-live-updates.md](references/kuali-live-updates.md). Obtain explicit confirmation immediately before changing a live record, replacing an attachment, certifying, routing, or submitting.

When the user asks to work from Codex CLI, read [CLI Browser Mode](../../references/cli-browser.md). Version 0.2 CLI mode may start the dedicated browser and perform a structural read-only probe, but it must not change the Kuali record.

When the user asks to work from VS Code, read [VS Code Workflow](../../references/vscode-workflow.md). Run plugin workflows through Codex CLI in VS Code's integrated terminal; do not assume the IDE sidebar loaded this plugin.

For workspace structure and handoff state, read [references/proposal-workspace.md](references/proposal-workspace.md).

## Boundaries

- Do not certify, route, approve, or submit unless the user explicitly requests that exact action and is authorized to take it.
- Do not silently change scope, commitments, personnel, compliance answers, facilities claims, or budget totals.
- Do not include confidential proposal content, credentials, or personal data in the distributed plugin.
- Preserve one canonical local source for each major document and regenerate upload copies after source edits.
