# Publishing model

Labs is the workshop floor for building **intelligent organizations**. Content moves through a cadence and lifecycle — not everything is a blog post.

## Cadence

| Rhythm | Column | Where |
|--------|--------|-------|
| 1–2× per week | **Dispatch** | `/dispatch/` |
| Monthly (or quarterly) | **How AI** | `/quarterly/` |
| As needed | **Measurements** | `/reports/` |
| Weekend projects | **Bench** (recipes) | `/recipes/` |
| Irregular | **Issues** (publication line) | `/issues/` |
| Social only | **Ephemeral** | Not indexed on Labs |
| Stable ops | **Standards** | [standards.thefocus.ai](https://standards.thefocus.ai) |

## Six pillars

Every dispatch is tagged with one primary pillar:

- **USE** — How teams work with AI day to day
- **BUILD** — Habitats, agents, harnesses, systems
- **DEPLOY** — Client delivery and operations
- **MEASURE** — Evals and evidence (briefs link to full measurements)
- **LEAD** — Org maturity and intelligent organizations
- **CONNECT** — MCP, integrations, backend providers

Filter by pillar: `/dispatch/use/`, `/dispatch/build/`, etc.

## How AI (monthly snapshot)

One series, one title format: **How AI in {Month} {Year}** — e.g. "How AI in June 2026".

Fixed sections each edition:

1. Delta since last edition
2. Workspace & access
3. Models
4. The harness
5. Skills, AGENTS.md, MCP
6. Workstation & process
7. Non-code examples
8. What actually changed

Covers work, code, operations, and life in a single operational snapshot — not separate "use" vs "code" columns.

```yaml
title: How AI in June 2026
date: 2026-06-15
pillar: use
column: quarterly
series: how-ai
quarter: 2026-Q2   # optional, for grouping
```

## Measurements vs dispatch

- **Dispatch** — argument, observation, pattern in progress
- **Measurement** — data, methodology, interactive subsite
- **Brief** — short editor's note tied to a measurement (`column: brief`, `relatedReport: /reports/...`). Not listed in the dispatch feed.

## Lifecycle to standards

```
Dispatch → How AI edition → Issue section → Standard (external)
Measurement → Standard (when methodology is stable)
Bench recipe → Standard (when procedure is canonical)
Ephemeral → nowhere (Twitter, etc.)
```

## Frontmatter

```yaml
pillar: build          # use | build | deploy | measure | lead | connect
column: dispatch       # dispatch | quarterly | brief | ephemeral
series: how-ai         # optional, for How AI editions only
quarter: 2026-Q2       # optional
relatedReport: /reports/foo/  # optional, for briefs
published: true
```

## Classifying existing content

Run after editing `scripts/thought-classifications.json`:

```bash
node scripts/apply-thought-taxonomy.mjs
```
