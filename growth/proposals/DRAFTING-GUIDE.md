# Proposal Drafter — How to use

Turns discovery-call notes into a draft proposal in minutes. On-demand (not
scheduled): you run it locally with Claude Code after a discovery call.

## How to run it

After a discovery call, in Claude Code in this repo, say:

> Draft a proposal from these notes using `growth/proposals/TEMPLATE.md`. Save
> it to `growth/proposals/drafts/`. Notes: <paste your raw call notes>

Or drop notes into a file and point Claude at it. Claude will:

1. Read `TEMPLATE.md` and `growth/linkedin/source-material.md` (for proven
   results / voice).
2. Fill every `{{placeholder}}` from your notes.
3. Flag anything it had to guess in a `> NEEDS CONFIRMATION:` callout so you
   can verify before sending.
4. Save to `growth/proposals/drafts/<client>-<date>.md`.

## What to capture on the call (so the draft is good)

- **The pain, in their words** — and a number if at all possible (current
  monthly spend, hours lost, latency, error rate).
- **Current stack** — what platform/tools they're on now.
- **What success looks like** to them.
- **Constraints** — deadline, budget signal, team's technical level, who owns
  it after handoff.
- **Decision-maker** — who signs off.

## Pricing guardrails (you set these — Claude won't invent prices)

Always tell Claude the fixed price (or a range) yourself. If you want help
sizing it, ask Claude to suggest a range based on scope and the value anchor
(e.g., a % of annual savings), but **you** confirm the number. Never let a
draft go out with an AI-guessed price unreviewed.

## Rules

- Every draft is a DRAFT. Read it fully before sending.
- Verify all numbers — especially the price and any savings claim.
- Keep client details out of commits if the client is sensitive: keep their
  draft local / add it to `.gitignore` rather than pushing identifying info.
