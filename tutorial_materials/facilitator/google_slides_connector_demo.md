# Facilitator Runbook: Google Slides Connector Demo

> **FACILITATOR MATERIAL — DO NOT PLACE IN THE PARTICIPANT WORKSPACE**

## Purpose

Demonstrate why a connector is more useful than merely uploading a PDF: Codex can inspect the complete native presentation, reason across its structure, preserve its design language, and—with explicit approval—create an editable derivative.

Use the ECEn 240/301 “Lecture 16 — Operational Amplifiers” Google Slides deck linked from Learning Suite. Do not publish its private URL in the tutorial repository or participant materials.

## Participant Prerequisite

Send participants `docs/GOOGLE_DRIVE_CONNECTOR_SETUP.md` as prework. They should arrive with the Google Drive plugin installed, their institutional Google account connected, and the synthetic read-only verification completed. Do not attempt first-time connector installation during the timed exercise unless the session has dedicated setup time.

Each participant should use their own synthetic test deck or a nonsensitive deck they own. They do not need access to the facilitator's ECEn 240/301 deck.

## Recommended Time: 8–10 Minutes Hands-On

### 1. Establish the boundary — 30 seconds

Tell participants:

- the deck contains course content but no student records;
- the first two prompts are read-only;
- any mutation will be made only to a duplicate;
- the instructor remains responsible for technical and pedagogical review.

### 2. Inspect the native deck — 2 minutes

Ask participants to paste their own safe deck URL directly into the Codex conversation and use:

```text
Use the Google Drive connector to inspect the complete native Google Slides presentation at this URL. Summarize the instructional sequence in 6–10 bullets. Then list the op-amp operating assumptions students must learn, the worked examples in the deck, and likely misconceptions the deck does or does not address. Cite slide numbers or titles. Do not edit, copy, or share the presentation.
```

Point out that Codex is reading the native presentation rather than relying on a PDF export or a manually pasted excerpt. Participants who have only the synthetic two-slide deck should verify the title, slide count, and code phrase before continuing.

### 3. Ask for a grounded improvement — 2 minutes

Use:

```text
If this is the ECEn op-amp deck, compare the native deck with the learning outcomes and synthetic student feedback in tutorial_materials/synthetic_workspace/teaching/ecen240_301_opamps. Otherwise, use the deck's own stated purpose and audience. Propose one additional slide that addresses an important misconception or missing explanation. Tell me:

1. where the new slide belongs;
2. which existing slide should be its visual exemplar;
3. the exact student-facing content;
4. how the instructor could check learning;
5. any claim or equation I should verify.

Do not change the presentation yet.
```

Briefly evaluate the proposal. For the op-amp deck, check especially that negative feedback alone does not guarantee linear operation and that the proposed example includes a supply-rail check. For another deck, require the participant to verify at least one factual or pedagogical claim.

### 4. Duplicate and edit — 2–3 minutes

Only after the proposal is acceptable, use:

```text
Create one copy of the presentation in the ChatGPT folder in My Drive and append “— AI Tutorial Copy” to its name. Edit only that copy. Add the approved slide in the proposed location by reusing the identified native slide or layout as the visual exemplar. Preserve the deck's typography and structure. Do not alter the original presentation. After editing, verify the complete copied deck and give me the link to the copy plus a concise description of what changed.
```

If Codex asks for confirmation before creating the copy or applying the edit, pause and use that moment to emphasize preview–confirm–apply–verify.

### 5. Verify visibly — 1 minute

Open the returned copy and inspect:

- the original deck is unchanged;
- the new slide appears in the intended location;
- equations, symbols, and supply limits are correct;
- no text is clipped or too small;
- the new slide looks like it belongs to the deck;
- no stale placeholder content remains.

Delete the tutorial copy later if it is no longer useful. Do not delete it during the live session because deletion is a separate destructive action.

## Fallback if the Connector Is Unavailable

Continue with the sanitized local packet. Participants can complete the analysis and drafting exercises without a connector. Do not move BYU work to a personal account to bypass a CES workspace restriction.

## Why This Example Works

The sequence combines several useful habits in one compact demonstration:

- choose the authoritative source rather than a flattened export;
- ask Codex to inspect before drafting;
- ground a proposal in both source material and learning evidence;
- separate planning from mutation;
- protect the original with a duplicate;
- visually verify an AI-created artifact.
