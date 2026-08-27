# Google Drive Connector Setup for the Slides Exercise

Complete this setup before the Google Slides portion of the live or self-guided tutorial. Allow 10–20 minutes after you have working BYU CES ChatGPT Edu access.

The plugin is named **Google Drive**, even though the exercise uses Google Slides. The same plugin works across Drive, Docs, Sheets, and Slides.

## What You Need

- A laptop with the ChatGPT desktop app or Codex CLI installed.
- Your approved BYU CES ChatGPT Edu account.
- An institutional Google account that can create a Google Slides presentation.
- A small synthetic presentation for verification.

Use the CES ChatGPT Edu identity for the Codex session and your institutional Google identity for the Drive connection. Do not use a personal ChatGPT account for BYU course or proposal work.

## Important Surface Difference

Choose one supported route:

- **ChatGPT desktop app:** install Google Drive from the **Plugins** directory and use it from a new Codex chat.
- **Codex CLI:** enter `/plugins`, install or enable Google Drive, and start a new CLI session.
- **VS Code:** open **Terminal → New Terminal**, run `codex`, and use `/plugins` there.

The Codex IDE sidebar does not support plugins. Installing Google Drive in the desktop app does not make it available in the VS Code sidebar; use Codex CLI in the integrated terminal instead.

OpenAI's current [Plugins documentation](https://learn.chatgpt.com/docs/plugins) describes these supported surfaces, the shared plugin directory, and the Google Drive plugin.

## Step 1: Create a Safe Verification Deck

Before connecting Codex, create a tiny presentation manually in your institutional Google Drive:

1. Open Google Drive and confirm the institutional Google account is active.
2. Create a blank Google Slides presentation.
3. Name it `AI Tutorial Connector Test - Your Initials`.
4. On slide 1, use the title `Connector verification`.
5. In the body, type `Synthetic file. Code phrase: blue resistor.`
6. Add a second slide titled `Safe editing practice`.
7. Close the presentation after Google confirms it is saved.

Do not use a roster, gradebook, student presentation, confidential proposal, or a deck with private comments for the first test.

## Step 2A: Install in the ChatGPT Desktop App

1. Open the **ChatGPT desktop app** and select the CES workspace.
2. Confirm you are using the approved BYU CES ChatGPT Edu identity.
3. Open **Plugins**.
4. Search for **Google Drive**.
5. Open the Google Drive plugin details and select the plus or install control.
6. Select **Connect** when prompted. Some versions prompt during installation; others prompt on first use.
7. In the Google authorization window, choose the institutional Google account.
8. Review the requested permissions and complete authorization only if the account and scopes are appropriate for your BYU work.
9. Return to the desktop app and confirm Google Drive appears in the installed or enabled list.
10. Start a completely new **Codex** chat.

The ChatGPT Chrome extension is not required for the Google Drive connector. That extension is used for controlling normal Chrome windows in the separate Learning Suite and Kuali browser workflow.

## Step 2B: Install in Codex CLI

Use this route for Terminal, PowerShell, or VS Code's integrated terminal.

1. Open the command window and start Codex:

   ```text
   codex
   ```

2. At the Codex prompt, enter:

   ```text
   /plugins
   ```

3. Search for **Google Drive** and open its details.
4. Choose the displayed install or enable action.
5. Follow the connection prompt. If a browser window opens, choose the institutional Google account, review the requested permissions, and complete authorization.
6. Confirm that Google Drive is installed and enabled in the plugin browser.
7. Exit the current Codex session and start `codex` again so the plugin's tools load into a new session.

The CLI interface may change slightly. Follow the labels shown in `/plugins`; do not enter Google passwords, multifactor codes, OAuth tokens, or browser cookies into the Codex prompt.

## Step 3: Run the Read-Only Verification

Copy the URL of your synthetic verification deck. In a new Codex chat or CLI session, enter:

```text
Use the Google Drive plugin to inspect the complete native Google Slides presentation at this URL: [paste URL]. Tell me the presentation title, slide count, both slide titles, and the code phrase on slide 1. Do not edit, copy, share, rename, or move anything.
```

The expected result is:

- the title includes your initials;
- there are two slides;
- the slide titles are `Connector verification` and `Safe editing practice`;
- the code phrase is `blue resistor`;
- the original deck remains unchanged.

If Codex asks permission to read the presentation, review the requested action and approve only the read. If it proposes unrelated access or a write, deny it and restate the read-only instruction.

## Step 4: Check Whether Copy and Edit Actions Are Available

Workspace administrators may permit Google Drive reading while restricting write actions. Test the workflow without changing the original:

```text
Using the same presentation, propose one short third slide that explains the purpose of this connector test. Tell me the exact title, body text, insertion location, and existing slide you would use as a visual reference. Do not change or copy anything yet.
```

Review the proposal, then use:

```text
Create one copy in the ChatGPT folder in My Drive and append “— AI Tutorial Copy” to the presentation name. Edit only the copy by adding the approved third slide. Do not alter, share, rename, move, or delete the original. Afterward, give me the link to the copy and summarize the change.
```

Open both links and verify that the original still has two slides and only the copy has the new slide. If the copy or edit action is unavailable, record that outcome and keep the plugin installed for the read-only workshop path.

## Troubleshooting

### Google Drive is not in the Plugins directory

- Confirm the CES workspace is active rather than a personal workspace.
- In CLI, confirm you used `/plugins` inside Codex rather than a shell command named `plugins`.
- Your workspace role or BYU/CES administrator may not make the plugin available. This cannot be fixed by reinstalling Chrome or switching to a personal account.
- Continue with the sanitized local files and tell the facilitator that Google Drive is unavailable in your CES workspace.

OpenAI documents that workspace administrators control plugin availability and connector actions in managed workspaces. See [Plugin controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors).

### Google authorization does not appear

- Start a new chat and explicitly ask Codex to use Google Drive; some plugins defer connection until first use.
- Reopen **Plugins**, find the installed Google Drive entry, and look for a connect or manage control.
- In CLI, reopen `/plugins` and confirm Google Drive is installed and enabled.
- Allow browser pop-ups for the authorization step, but never paste an authorization token into Codex.

### Codex cannot find the test deck

- Paste the deck's full Google Slides URL instead of searching by title.
- Confirm the Google account connected to the plugin owns or can open the deck.
- Confirm the deck is fully saved and that its title is unique.
- If the wrong Google identity was connected, disconnect or manage Google Drive from the Plugins interface and reconnect the institutional account.

### Reading works but copying or editing does not

That can be an intentional CES workspace restriction. Plugin availability, connector access, and allowed actions are separate controls. Complete the read-only exercise and use the local packet for drafting. Do not attempt to bypass the restriction with browser cookies, a personal ChatGPT account, or a separate unapproved integration.

### The VS Code sidebar cannot see Google Drive

This is expected. Open **Terminal → New Terminal**, run `codex`, enter `/plugins`, and use the Google Drive plugin from that CLI session.

## Privacy and Safety

- The connector uses the permissions of the Google account you authorize; it does not expand your underlying Drive access.
- Use synthetic or nonsensitive files for the workshop.
- Do not expose student names, grades, accommodations, private comments, unpublished student work, restricted proposals, credentials, or controlled data.
- Start with read-only inspection.
- Preview the exact change before approving a copy or edit.
- Edit a duplicate, verify both files, and retain the original as the recovery path.
- Follow the [BYU ChatGPT Edu Data Guidelines](https://ai.byu.edu/chatgpt-edu-data-restrictions-page).

For Business, Enterprise, and Edu customers, OpenAI's current plugin-control documentation states that information accessed through apps is not used for model training, while the connected service's own permissions and policies still apply. Review the current [OpenAI plugin and connector controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors) before the workshop because availability and controls can change.

## Setup Completion Checklist

- [ ] CES ChatGPT Edu workspace is active.
- [ ] Google Drive plugin is installed and enabled on the surface I will use.
- [ ] Institutional Google account is connected.
- [ ] Synthetic two-slide verification deck exists.
- [ ] Read-only test returned the correct title, count, titles, and code phrase.
- [ ] Original deck remained unchanged.
- [ ] Copy/edit test succeeded, or I know I will use the read-only fallback.
- [ ] I know that VS Code users must use Codex CLI in the integrated terminal.

After completing the checklist, return to the [Self-Guided Tutorial](../tutorial_materials/SELF_GUIDED_TUTORIAL.md) or the live-session handout.
