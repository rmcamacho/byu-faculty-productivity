# Self-Guided ECEN Faculty AI Productivity Tutorial

This guide reproduces the one-hour hands-on workshop without a facilitator. Once setup is complete, allow about 60 minutes for the core tutorial. Take longer if you want to keep and refine the drafts.

All required local exercise files are included in this repository. Google Slides, current web searches, Learning Suite, and Kuali depend on account access and institutional availability; every such section has a safe local or read-only fallback.

## What You Will Practice

By the end, you will have used Codex to:

1. reconcile inconsistent administrative documents;
2. translate principles from Elder Gong's AI address into a course activity;
3. inspect and safely propose a change to a Google Slides deck;
4. audit technical solutions and design additional homework;
5. turn a faculty-defined research direction into a funding concept;
6. preview natural-language Learning Suite and Kuali workflows.

The recurring pattern is:

```text
inspect → cite → propose → confirm → apply to a narrow target → verify
```

## Before Starting the Clock

### 1. Download the repository

Open <https://github.com/rmcamacho/byu-faculty-productivity>, choose **Code → Download ZIP**, extract the ZIP, and put the resulting folder somewhere easy to find. You do not need a GitHub account or Git.

### 2. Complete setup

Follow these repository guides in order:

1. [Start Here](../START_HERE.md)
2. [Complete Setup Guide](../docs/COMPLETE_SETUP_GUIDE.md)
3. [Google Drive Connector Setup](../docs/GOOGLE_DRIVE_CONNECTOR_SETUP.md) if Google Slides is available in your CES workspace

Use your approved BYU CES ChatGPT Edu account for BYU work. Do not substitute a personal account merely to bypass an institutional restriction.

### 3. Verify the two BYU skills

In a new Codex session, run these prompts one at a time:

```text
Use $byu-learning-suite. Do not open a browser or change anything. Summarize the workflow's safety pattern and supported modes.
```

```text
Use $byu-kuali-proposals. Do not open Kuali or change anything. Summarize the workflow and the actions that require explicit authorization.
```

A successful response should describe inspection, a preview, explicit confirmation before a write, application to a narrow target, and verification afterward.

### 4. Protect the exercise boundaries

Do not open the repository root as the Codex workspace. Open only the exact exercise folder named in each section. The answer checks are outside those folders; keeping them out of Codex's scope makes the exercises meaningful and models good privacy practice.

For each new folder:

- **Desktop app:** begin a new Codex chat and select only that folder as the workspace.
- **Terminal, PowerShell, or VS Code:** navigate to that exact folder, run `codex`, and start a new session.
- **VS Code note:** plugins are available through Codex CLI in the integrated terminal, not through the Codex IDE sidebar.

Use only the synthetic materials supplied here. Do not add rosters, grades, accommodations, student identifiers, credentials, controlled data, or confidential proposal files.

## Core 60-Minute Route

| Time | Section |
|---|---|
| 0:00–0:05 | Orientation and safety check |
| 0:05–0:13 | Administrative document analysis |
| 0:13–0:23 | Elder Gong principles applied to course design |
| 0:23–0:33 | Google Slides connector or local fallback |
| 0:33–0:43 | Op-amp homework audit and extension |
| 0:43–0:54 | Research direction, funding opportunity, and concept |
| 0:54–0:59 | Learning Suite and Kuali preview |
| 0:59–1:00 | Reflection and next action |

If Codex is still writing when a section ends, read its highest-priority findings and continue. The goal is to learn the workflow, not to polish every artifact during the hour.

---

## 0:00–0:05 — Orientation and Safety

Before delegating any task, answer these questions:

- What exact files or system should Codex inspect?
- What is it allowed to do?
- What must it not do?
- What evidence should it cite?
- What requires human confirmation?
- How will the result be verified?

For this tutorial, local exercises begin read-only. Cloud or browser exercises use synthetic content. Learning Suite and Kuali remain read-only previews unless you separately choose an approved, safe target after the tutorial.

**Checkpoint:** You should be able to explain why “help with my course” is a weaker prompt than “inspect this folder, cite each finding, propose changes, and modify nothing yet.”

---

## 0:05–0:13 — Administrative Document Analysis

Open only:

```text
tutorial_materials/synthetic_workspace/administration/ge_redesign
```

Start a new Codex session and enter:

```text
Read every file in this folder. Prepare a concise briefing that identifies:

1. confirmed official facts about the current GE proposal;
2. decisions recorded by the synthetic department or college committees;
3. deadlines and dependencies;
4. conflicting dates, numbers, positions, or assumptions;
5. actions without a clear owner;
6. claims that require verification before the department responds.

Cite the source filename for every item. Prioritize the most consequential findings. Do not modify any file.
```

Review the response before asking:

```text
Recommend a corrected action plan that can be completed before the controlling deadline. Preserve unresolved policy questions instead of inventing answers. Then draft a concise department response that accurately represents the decisions in the synthetic meeting notes. Do not submit anything or modify the source files.
```

### Self-check — open only after completing the exercise

<details>
<summary>Expected findings</summary>

- The college request says August 27 at noon; the minutes say August 28; the tracker says August 29. August 27 is the prudent controlling internal deadline unless an extension is confirmed.
- The minutes record conditional support for continued development. The draft response instead makes unsupported demands and commitments.
- Four sections at 40 students would be 160 students, but the described schedule averages 3.5 sections and therefore 140 students.
- The listed first-year costs total $36,000, not $24,000. The $24,000 figure is the recurring amount.
- The faculty-load assumptions do not clearly cover 3.5 or four sections.
- The AI-literacy recommendation has no owner.
- Mapping to course-level outcomes is blocked because those outcomes do not yet exist.
- ECEN 230 substitution, fall 2027 implementation, staffing, funding, and working-group demands were not authorized by the recorded decisions.
- A strong corrected response preserves conditional support, asks questions, and removes invented promises.

</details>

**Lesson:** Codex is most valuable here because it reconciles evidence across files rather than merely summarizing the newest draft.

---

## 0:13–0:23 — Apply Elder Gong's Address to Course Design

Open only:

```text
tutorial_materials/synthetic_workspace/teaching/ecen240_301_opamps
```

Start a new session and enter:

```text
Read every file in this folder, including elder_gong_2026_timestamped_notes.md. Propose three concrete changes to this unit that would prepare students to work responsibly with AI while preserving productive struggle, human judgment, and evidence of individual learning.

For each change, identify the learning outcome, what AI may do, what the student must do, how learning will be verified, and the smallest feasible pilot. Cite the source files. Keep the response concise and do not modify anything.
```

Choose the strongest proposal and ask:

```text
Turn that idea into a one-page implementation plan. Include the instructions students would see, the work they must complete before using AI, permitted and prohibited AI assistance, a disclosure requirement, an instructor verification check, and a brief explanation of how the activity supports agency, dignity, and durable learning. Show the draft in chat; do not modify files.
```

### Self-check

<details>
<summary>What a strong response should contain</summary>

- A specific op-amp learning outcome, not generic “AI literacy.”
- Student responsibility for choosing the operating model, checking feedback and saturation, and explaining physical meaning.
- AI used as a critic, variant generator, or source of feedback after an individual attempt—not as a substitute for the attempt.
- Visible evidence of learning such as annotated equations, an error analysis, comparison with an AI answer, or a short oral explanation.
- A small pilot involving one problem or one class period.
- Clear permitted uses, prohibited uses, disclosure, privacy boundaries, and instructor verification.
- A connection to agency and dignity that preserves student judgment instead of relying on surveillance.

</details>

**Lesson:** Broad principles become actionable when tied to a learning outcome, student responsibility, evidence, and a feasible pilot.

---

## 0:23–0:33 — Google Slides Connector

Use the synthetic two-slide deck created in [Google Drive Connector Setup](../docs/GOOGLE_DRIVE_CONNECTOR_SETUP.md). Do not use a live course deck or any presentation containing student information.

In a new Codex desktop or CLI session with the Google Drive plugin available, enter:

```text
Use the Google Drive plugin to inspect the complete native Google Slides presentation at this URL: [paste the URL of your synthetic deck]. Tell me the presentation title, slide count, both slide titles, and the code phrase on slide 1. Do not edit, copy, share, rename, move, or delete anything.
```

Expected read-only result:

- two slides;
- `Connector verification` and `Safe editing practice`;
- code phrase `blue resistor`;
- no change to the original.

Then ask:

```text
Propose one short third slide that explains what this connector test demonstrates. Give me the exact title, body text, insertion location, and existing slide to use as a visual reference. Do not copy or edit anything yet.
```

If the proposal is acceptable and your workspace permits writes:

```text
Create one copy in the ChatGPT folder in My Drive and append “— AI Tutorial Copy” to the presentation name. Edit only the copy by adding the approved third slide. Do not alter, share, rename, move, or delete the original. Then give me the copy's link and summarize the change.
```

Open both presentations yourself. Verify that the original has two slides and only the copy has the addition.

### Read-only or unavailable fallback

If Google Drive is absent or restricted, do not switch to a personal account to bypass the restriction. Instead, remain in the op-amp folder and ask:

```text
Using 02_lecture_summary.md, propose one additional lecture slide that addresses a misconception documented in 06_synthetic_student_feedback.md. Give the slide title, no more than four bullets, its insertion point in the instructional sequence, the learning outcome it supports, and how the instructor would check whether it helped. Cite both source files. Do not modify anything.
```

**Lesson:** Cloud-document work follows the same sequence as local work: inspect, propose, copy, edit only the copy, and verify both artifacts.

---

## 0:33–0:43 — Audit and Extend Op-Amp Homework

Remain in the op-amp folder, but start a fresh Codex conversation so the earlier course-design task does not bias the audit.

```text
Review the learning outcomes, lecture summary, current practice set, draft solutions, constraints, and synthetic student feedback. First audit the existing materials for conceptual mistakes, ambiguity, uncovered outcomes, and likely student misconceptions. Then propose two original op-amp homework problems at the same level that improve the coverage.

Do not copy textbook problems and do not edit files. Show all calculations, identify current directions, check outputs against the supply rails, and state exactly which assumption fails if saturation occurs. Lead with the three most consequential solution errors.
```

### Self-check — audit the auditor

<details>
<summary>Expected technical findings</summary>

- Problem 1 has the correct negative-rail result but incorrectly applies a virtual short to an open-loop comparator.
- Problem 2 has correct voltages and current magnitude but incorrectly says the sensor supplies the buffered load current. The op-amp output supplies it from the power system.
- Problem 3 is correct: the output is 1.30 V, the resistor-current magnitudes are 8.0 µA, and the output is inside the rails.
- Problem 4 correctly computes that linear operation would request 9 V, but the actual idealized output saturates at +5 V and the virtual-short assumption fails.
- Missing or weak coverage includes explicit terminal identification, explaining why a virtual short is not a physical connection, independent model selection, combining signals, and practical purpose.
- New problems should remain within the stated ideal-op-amp scope and include operating-region checks rather than adding complexity for its own sake.

</details>

Check at least one proposed solution line by line. If Codex made an error, point to the exact equation and ask it to correct and re-verify the result.

**Lesson:** AI-generated instructional material needs subject-matter review. Fluent algebra is not proof of a physically valid model.

---

## 0:43–0:54 — Research Direction, Funding Opportunity, and Concept

Open only:

```text
tutorial_materials/synthetic_workspace/grants/ecen_funding
```

Start a new session. Use your own research direction or the supplied synthetic one.

### Start with faculty intent

For your own direction:

```text
Help me prepare to search for research funding, but do not search yet. Ask me no more than four concise questions about my current research, the direction I want to pursue next, the capabilities and collaborators I can realistically use, and the desired project scale or sponsor constraints. Then summarize my answers as a provisional funding-search brief and ask me to correct it.
```

For the supplied profile:

```text
Read 00_synthetic_faculty_direction.md and 01_synthetic_constraints.md. Produce a concise funding-search brief that separates the desired direction, confirmed synthetic capabilities, planning assumptions, and unresolved questions. Do not search or modify files.
```

A public Google Scholar profile is optional supporting evidence. Publications should inform the brief, not dictate the faculty member's future direction. If no profile exists, the faculty description is sufficient.

### Reproducible local audit

Use the included dated NSF source so this tutorial does not depend on live search:

```text
Audit every claim and recommendation in 03_deliberately_flawed_shortlist.md against 02_dated_backup_nsf_eccs_2026-08-26.md, 00_synthetic_faculty_direction.md, and 01_synthetic_constraints.md. Identify unsupported, contradicted, prohibited, or unverified claims. Cite the source filename for every finding. Then recommend the correct next step. Do not search the web, contact anyone, modify files, or create a Kuali record.
```

Then ask:

```text
Using the corrected research-direction brief and the dated NSF source, draft a compact proposal concept using 04_concept_note_template.md. Ground every capability claim in the supplied files or label it as needing confirmation. Include the foundational question, approach, benchtop validation, technical risk, student roles, broader impact, provisional program fit, and one question for a program director. Do not invent preliminary results, facilities, fabrication access, partners, budget rates, or institutional commitments.
```

### Self-check

<details>
<summary>Expected grant-audit findings</summary>

The flawed shortlist contains ten planted problems:

1. It applies an October 9, 2026 ERI deadline to an ECCS solicitation that accepts proposals anytime.
2. It imports ERI's $200,000 and 24-month limits even though the ECCS source does not specify those exact limits.
3. It assigns EPMQD merely because the application involves a sensor; CSCS is the stronger provisional fit for the stated circuit/system contribution.
4. It invents a required letter of intent.
5. It ignores the recommended one-page summary and program-director discussion.
6. It treats unconfirmed fabrication access as an existing capability.
7. It recommends voluntary committed cost sharing even though that is prohibited.
8. It assumes ERI eligibility without reconciling restrictive institutional and PI rules.
9. It creates a Kuali record before fit, eligibility, scope, and faculty direction are resolved.
10. It invents a field partner and begins proposal development before selecting the flagship validation application.

A strong concept uses the confirmed benchtop path, treats program fit as provisional, defines a measurable tradeoff, and preserves every unsupported resource as an open question.

</details>

### Optional current-search extension

After the core tutorial, use the live-search prompt in the folder's `README.md`. Verify decisive claims on current official sponsor pages, record the verification date, and treat missing eligibility, deadline, or budget information as unresolved rather than guessing.

**Lesson:** The defensible chain is faculty intent → evidence → current opportunity → eligibility and scope → concept → administrative planning.

---

## 0:54–0:59 — Learning Suite and Kuali Preview

These prompts exercise the installed BYU skills without opening a browser or changing a live system.

Learning Suite:

```text
Use $byu-learning-suite. A faculty member might ask, “Change the date of Quiz 5,” but do not open a browser or make a change. Explain how you would identify the exact course and quiz, inspect the current value, resolve ambiguity, preview the proposed change, obtain confirmation, apply only the approved change, and verify it. Also give three other kinds of Learning Suite tasks the same workflow can support.
```

Kuali:

```text
Use $byu-kuali-proposals. Using the grant concept workflow as context, explain how an approved concept and official solicitation would become a canonical proposal workspace, compliance matrix, attachment plan, budget-coordination checklist, and carefully reviewed Kuali update. Do not open Kuali, create a record, certify, route, approve, or submit anything.
```

### Self-check

<details>
<summary>Expected boundaries</summary>

- Natural-language prompts can support many tasks; the tools are not limited to one purpose-built due-date command.
- Codex should inspect the exact target and current state before proposing a change.
- A consequential write should be previewed and explicitly confirmed immediately before application.
- The result should be reopened or reread to verify the saved state.
- Learning Suite grading judgments and handling of student PII remain constrained.
- Kuali certification, routing, approval, and submission remain with authorized people.
- A proposal record should not be created merely because a possible opportunity was found.

</details>

If you later test browser access, use a safe shell or approved draft, begin read-only, and follow the browser setup in the Complete Setup Guide. Do not make a live write merely to finish this tutorial.

---

## 0:59–1:00 — Finish and Choose a Real Task

Write down one bounded task you will try this week. Good examples include:

- reconcile a folder of committee drafts;
- audit a problem set for coverage and errors;
- turn a research direction into funding-search criteria;
- inspect a nonsensitive Slides deck and propose one improvement;
- preview a Learning Suite change without applying it;
- build a compliance matrix from a verified solicitation.

Use this reusable prompt frame:

```text
Work only with [exact folder, document, course, or proposal]. First inspect and cite the current state. Identify ambiguity and missing evidence. Propose a bounded plan, but do not change anything yet. Tell me what would require confirmation and how the final result would be verified.
```

## Completion Checklist

- [ ] I used only the exact exercise folder for each local task.
- [ ] I asked Codex to cite evidence rather than merely sound confident.
- [ ] I found the principal planted errors in the GE, op-amp, and grant packets.
- [ ] I separated faculty intent from publication history and sponsor fit.
- [ ] I used Google Slides safely or completed the local fallback.
- [ ] I can explain preview–confirm–apply–verify for Learning Suite and Kuali.
- [ ] I know which actions remain human responsibilities.
- [ ] I selected one real, appropriately bounded task to try next.

## If Something Does Not Work

- **Codex or account setup:** return to [Start Here](../START_HERE.md) and the [Complete Setup Guide](../docs/COMPLETE_SETUP_GUIDE.md).
- **Google Drive:** use the troubleshooting and read-only fallback in [Google Drive Connector Setup](../docs/GOOGLE_DRIVE_CONNECTOR_SETUP.md).
- **Plugins in VS Code:** run `codex` from VS Code's integrated terminal; the IDE sidebar does not load plugins.
- **No live web search:** use the dated NSF backup included in the grant folder.
- **No Learning Suite or Kuali browser access:** complete the skill-based preview prompts; browser writes are not required for tutorial completion.
- **Different answer:** compare evidence, calculations, and assumptions. The checkpoints describe the intended planted findings, but open-ended redesign and concept responses can legitimately differ.

You have completed the tutorial when you can reproduce the workflow safely—not when every optional connector or institutional write action is available.
