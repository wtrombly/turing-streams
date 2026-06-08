# LinkedIn Source Material & Voice Guide

This is the raw material and voice reference for Turing Streams content. Keep it
current — when you close an engagement or learn something post-worthy, add it
here, and the content engine will draw from it.

## Who's posting

**Will Trombly** — Founder & Software Engineer, Turing Streams (Houston, TX).
US Army veteran turned software engineer. Personal account, first person ("I"),
not corporate "we" for LinkedIn posts.

## Voice

- Direct, concrete, operationally-minded. No marketing fluff, no hype.
- Lead with a number or a specific outcome. Engineers and ops leaders trust
  specifics.
- Veteran's bluntness: say the real cost, the real trade-off.
- Teach, don't sell. The case for hiring Will should be *implied* by how
  clearly he explains the problem.
- Short sentences. White space. No emoji walls (one tasteful emoji max, often
  zero). No "I'm thrilled to announce". No engagement-bait questions tacked on.

## Positioning / core message

"Build the right system. Cut the platforms you don't need." Turing Streams
designs data pipelines, AI automation, and cloud systems — and replaces
expensive low-code platforms with solutions teams can own and maintain.

## Proven results (anonymized — safe to reference)

- **Workato teardown:** Replaced multiple Workato workflows (CRM ↔ billing ↔
  data warehouse) with .NET Azure Functions behind Azure Service Bus.
  **$6,200/mo → $180/mo (97% cut)** in three weeks. Client can now modify the
  integration without a Workato license.
- **Batch → streaming:** A logistics company's nightly 6-hour reporting batch
  left ops deciding on stale data. Rebuilt as streaming on Azure Event Hubs +
  serverless + a materialized view layer. **6-hour batch → 4-minute updates,
  99% latency reduction**, no new infra to manage.

## Areas of depth (good topic wells)

- The true cost of low-code platforms at scale (licensing math, lock-in).
- When low-code is right vs. when to replace it (be honest — credibility).
- Batch vs. streaming architecture trade-offs.
- Event sourcing: audit trails, temporal queries, when it's worth it.
- Serverless cost/architecture on Azure/AWS/GCP.
- Pragmatic LLM/AI integration into existing systems (not hype).
- Engineering discipline lessons from the military.

## Post formats that fit this voice

- **Teardown:** "A client was paying $6,200/mo for Workato. Here's what we
  replaced it with and what it actually cost." Walk the architecture.
- **Cost-math explainer:** the hidden licensing math of low-code at scale.
- **Honest take:** "Low-code isn't always wrong. Here's when I tell clients to
  keep it." (Counter-intuitive = credible.)
- **Architecture mini-lesson:** one diagram-in-words concept (batch vs stream,
  event sourcing) explained simply.
- **Field note:** a short lesson from a real (anonymized) engagement.

## Hard rules

- Never name or identify a client. Keep results anonymized.
- Never invent numbers or results not in this file.
- No confidential architecture details that could identify a client.
- Each draft is a DRAFT for Will to review and post himself.
