# Adaptive Browser Task Scripts

Use this mode for prompt-driven Learning Suite or Kuali work from Codex CLI, including Codex CLI in VS Code's integrated terminal. It supports varied tasks rather than a fixed catalog of domain commands.

## Model

For each requested outcome, create a small task file in the user's current workspace. The user describes the outcome in ordinary language; do not ask them to write JavaScript or construct shell commands.

The task file must:

- default-export one self-contained function;
- accept `{ applyArg, inputArg }`;
- inspect and return a precise preview when `applyArg` is false;
- perform only the previewed mutations when `applyArg` is true;
- return enough state to verify the result;
- avoid cookies, browser storage, direct network calls, passwords, MFA fields, and student PII;
- use visible DOM controls and native application save actions.

The runner rejects common cookie, storage, and direct-network APIs. This is a guardrail, not permission to process prohibited data.

## Task Shape

Create a task file outside the installed plugin, for example `browser_tasks/change_quiz_date.mjs`:

```javascript
export default async function ({ applyArg, inputArg }) {
  const normalize = (value) => String(value || "").replace(/\s+/g, " ").trim();
  const target = inputArg.item;
  const row = Array.from(document.querySelectorAll("[role=row], tr, .grid-subgrid-row"))
    .find((element) => normalize(element.innerText).includes(target));

  if (!row) return { ok: false, error: `Item not found: ${target}` };

  const preview = {
    item: target,
    current: normalize(row.innerText),
    proposed: inputArg.proposed,
  };
  if (!applyArg) return { ok: true, preview };

  // Task-specific DOM interaction goes here. Recheck the target before every
  // consequential click and use the application's native Save control.

  return { ok: true, preview, applied: true };
}
```

This example illustrates the contract, not a reusable quiz-date implementation. Generate selectors and interactions from the actual safe page and requested task.

Store variable inputs in a separate JSON file when useful. Do not put credentials or protected data in the task or input file.

## Run Sequence

Resolve the plugin root from the loaded skill path. From the skill directory, the runner is `../../scripts/browser_task_runner.mjs`.

1. Start the dedicated Chrome session as described in [CLI Browser Mode](cli-browser.md).
2. Ask the user to sign in and navigate to a safe page.
3. Confirm the visible course or proposal identity before creating the task.
4. Generate the smallest task script needed for the requested outcome.
5. Run without `--apply`:

   ```text
   node ../../scripts/browser_task_runner.mjs "page title" browser_tasks/task.mjs --input browser_tasks/input.json
   ```

6. Present the returned target, current state, proposed state, related effects, and exact save action.
7. Obtain explicit confirmation immediately before the write.
8. Rerun the same task with `--apply`.
9. Inspect again or run a separate read-only verification task. Report what persisted.

The runner allows 60 seconds by default. For a longer task, use `--timeout` with a justified millisecond value and keep the change set small enough to review and recover.

Never treat an earlier broad request as confirmation for the apply run. If the live page differs materially from the preview, stop without saving.

## Reuse

Task scripts may be retained in the user's private workspace when they are broadly reusable and contain no identifiers or protected data. Keep course IDs, proposal numbers, dates, names, and other instance-specific values in local input files. Never add live task inputs, snapshots, or browser profiles to the distributed plugin.
