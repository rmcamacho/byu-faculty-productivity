# One-Hour ECEN Faculty AI Productivity Tutorial

This tutorial is designed for faculty to work on their own laptops. Software, accounts, plugins, and connectors must be installed before the timed session.

Choose a route:

- **Attending the live session:** use this handout and follow the facilitator's timing.
- **Working independently:** use the [Self-Guided Tutorial](SELF_GUIDED_TUTORIAL.md), which contains exact prompts, answer checkpoints, and fallbacks for unavailable connectors.

## Before the Workshop

Complete these guides:

1. [Start Here](../START_HERE.md)
2. [Complete Setup Guide](../docs/COMPLETE_SETUP_GUIDE.md)
3. [Google Drive Connector Setup](../docs/GOOGLE_DRIVE_CONNECTOR_SETUP.md)

Bring:

- the laptop you will use during the workshop;
- a working BYU CES ChatGPT Edu login;
- Codex in the ChatGPT desktop app or Codex CLI;
- the downloaded tutorial repository;
- the synthetic Google Slides verification deck from connector setup;
- optionally, a public Google Scholar profile URL and a nonsensitive lecture deck you own.

Do not bring student records, grades, accommodations, restricted proposal data, credentials, or confidential unpublished material into the tutorial workspace.

## Download the Tutorial Without Learning Git

1. Open <https://github.com/rmcamacho/byu-faculty-productivity>.
2. Select **Code → Download ZIP**.
3. Open the downloaded ZIP file and extract the folder.
4. Put the extracted folder somewhere easy to find, such as Documents.

A GitHub account and the `git` command are not required.

## Critical Workspace Rule

Open only the exercise folder named by the facilitator or self-guided instructions—not the entire repository. The repository contains answer material outside the participant folders. Restricting the workspace also teaches a useful privacy habit: give Codex only the files required for the task.

For Codex CLI, navigate to the exact exercise folder before starting `codex`. For the desktop app, select that exact folder as the local project or workspace.

## Workshop Schedule

| Time | Activity | Exercise folder or surface |
|---|---|---|
| 0:00–0:05 | Orientation and safety | This handout |
| 0:05–0:13 | Administrative document analysis | `synthetic_workspace/administration/ge_redesign` |
| 0:13–0:23 | Apply Elder Gong's AI address to ECEn 240/301 | `synthetic_workspace/teaching/ecen240_301_opamps` |
| 0:23–0:33 | Google Slides connector | Participant's synthetic test deck or safe lecture deck |
| 0:33–0:43 | Audit and extend op-amp homework | `synthetic_workspace/teaching/ecen240_301_opamps` |
| 0:43–0:54 | Research direction, grant search, and concept | `synthetic_workspace/grants/ecen_funding` |
| 0:54–0:59 | Learning Suite and Kuali preview | Facilitator demonstration or installed BYU plugin |
| 0:59–1:00 | Wrap-up | Save useful outputs and stop live sessions |

All folder paths above are relative to `tutorial_materials`.

## Exercise 1 — Administrative Analysis

Open only:

```text
tutorial_materials/synthetic_workspace/administration/ge_redesign
```

Follow its `README.md`. The files simulate a department and college discussion about BYU's General Education redesign and contain intentional inconsistencies. Begin read-only and require filename citations.

## Exercise 2 — Course Redesign

Open only:

```text
tutorial_materials/synthetic_workspace/teaching/ecen240_301_opamps
```

Follow Exercise A in its `README.md`. Ask Codex to connect Elder Gong's address to concrete changes in the op-amp unit while preserving productive struggle and evidence of student learning.

## Exercise 3 — Google Slides Connector

Use the synthetic deck created during connector setup or a nonsensitive lecture deck you own. Follow the read–reason–duplicate–edit sequence in the op-amp `README.md`.

If Google Drive is unavailable or read-only in the CES workspace, continue with the local op-amp files. Do not switch to a personal account to bypass a workspace restriction.

## Exercise 4 — Homework Development

Continue in the op-amp folder, preferably in a new Codex chat. Follow Exercise B in its `README.md`. Codex should find the planted solution errors before proposing original problems.

## Exercise 5 — Grant Development

Open only:

```text
tutorial_materials/synthetic_workspace/grants/ecen_funding
```

Follow its `README.md`. Start by telling Codex the direction you want your research to take. A public Scholar profile is optional supporting evidence. Search current official sponsor sources, challenge eligibility and fit, and stop at a one-page concept skeleton.

## Exercise 6 — Learning Suite and Kuali

These are short previews of the installed BYU Faculty Productivity plugin, not full individual exercises during the hour.

Safe prompts:

```text
Use $byu-learning-suite. Explain how you would inspect my course and preview a requested change. Do not open a browser or modify anything.
```

```text
Use $byu-kuali-proposals. Explain how you would turn an approved concept and an official solicitation into a proposal workspace and compliance matrix. Do not open Kuali, create a record, certify, route, approve, or submit anything.
```

## Universal Review Pattern

For consequential work, use this sequence:

```text
inspect → cite → propose → confirm → apply to the narrow target → verify
```

AI output is a draft or analysis aid. The faculty member remains responsible for course content and scientific claims. Authorized university personnel remain responsible for institutional approvals and submissions.
