# Publishing model

Labs is the workshop floor for building **intelligent organizations**. Content moves through a cadence and lifecycle — not everything is a blog post.

## Cadence

| Rhythm | Column | Where |
|--------|--------|-------|
| 1–2× per week | **Dispatch** | `/dispatch/` |
| Every quarter | **Quarterly** (How I AI, How I Code) | `/quarterly/` |
| As needed | **Measurements** | `/reports/` |
| Weekend projects | **Bench** (recipes) | `/recipes/` |
| Irregular | **Issues** (publication line) | `/issues/` |
| Social only | **Ephemeral** | Not indexed on Labs |
| Stable ops | **Standards** | [standards.thefocus.ai](https://standards.thefocus.ai) |

## Six pillars

Every dispatch and quarterly post is tagged with one primary pillar:

- **USE** — How teams work with AI day to day
- **BUILD** — Habitats, agents, harnesses, systems
- **DEPLOY** — Client delivery and operations
- **MEASURE** — Evals and evidence (briefs link to full measurements)
- **LEAD** — Org maturity and intelligent organizations
- **CONNECT** — MCP, integrations, backend providers

Filter by pillar: `/dispatch/use/`, `/dispatch/build/`, etc.

## Quarterly series

### How I AI (`series: how-i-ai`)

Fixed sections each quarter:

1. Workspace & access
2. Non-code examples
3. Models
4. The harness
5. Skills & marketplace
6. Coding & process
7. What actually changed

### How I Code (`series: how-i-code`)

Fixed sections each quarter:

1. Delta since last quarter
2. Models
3. The harness
4. Workstation (IDE / tmux)
5. Skills, AGENTS.md, MCP
6. Process & alignment
7. What actually changed

Set `quarter: 2026-Q3` in frontmatter when publishing.

## Measurements vs dispatch

- **Dispatch** — argument, observation, pattern in progress
- **Measurement** — data, methodology, interactive subsite
- **Brief** — short editor's note tied to a measurement (`column: brief`, `relatedReport: /reports/...`). Not listed in the dispatch feed.

## Lifecycle to standards

```
Dispatch → Quarterly roll-up → Issue section → Standard (external)
Measurement → Standard (when methodology is stable)
Bench recipe → Standard (when procedure is canonical)
Ephemeral → nowhere (Twitter, etc.)
```

## Frontmatter

```yaml
pillar: build          # use | build | deploy | measure | lead | connect
column: dispatch       # dispatch | quarterly | brief | ephemeral
series: how-i-ai       # optional, for quarterly
quarter: 2026-Q3       # optional
relatedReport: /reports/foo/  # optional, for briefs
published: true
```

## Classifying existing content

Run after editing `scripts/thought-classifications.json`:

```bash
node scripts/apply-thought-taxonomy.mjs
```
