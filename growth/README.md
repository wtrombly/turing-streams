# Growth Automation Workspace

This folder holds the AI automations that grow Turing Streams **passively** —
they do the research and drafting; **you approve and act**. Nothing here posts
publicly, emails a prospect, or sends a proposal on its own. That's deliberate:
your voice and judgment are the product.

## The four automations

| # | Automation | Cadence | Runs as | Output |
|---|-----------|---------|---------|--------|
| 1 | **Opportunity Radar** | Weekly (Mon) | Remote scheduled agent | `opportunity-radar/digests/` |
| 2 | **LinkedIn Content Engine** | Weekly (Thu) | Remote scheduled agent | `linkedin/drafts/` |
| 3 | **Speed-to-Lead** | On form submit | Frontend (live now) | Booking CTA in `src/App.tsx` |
| 4 | **Proposal Drafter** | On demand | You + Claude | `proposals/drafts/` |

## The workflow: draft → you approve

```
  Agent runs on schedule
        │
        ▼
  Writes a dated markdown file into this repo + commits it
        │
        ▼
  You review (git pull / open the file)
        │
        ▼
  You act on the good ones (reach out, post, send) — or ignore
```

## How the recurring agents run

Automations #1 and #2 are **remote scheduled agents** ("routines") that run in
Anthropic's cloud on a cron schedule. They:

1. Clone this repo
2. Read their `PROMPT.md` (self-contained instructions)
3. Do web research / drafting
4. Write a dated file into their output folder
5. Commit & push

**Requirement:** your GitHub account must be connected so the remote agent can
push. Run `/web-setup` in Claude Code, or install the Claude GitHub App on
`wtrombly/turing-streams`. Manage the routines themselves at
https://claude.ai/code/routines

## Tuning

Everything is plain markdown. To change what the radar hunts for, edit
`opportunity-radar/PROMPT.md`. To change your posting voice, edit
`linkedin/source-material.md`. The next scheduled run picks up the changes
automatically (the agent re-reads these files every time).
