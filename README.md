# TheFocus.AI Labs

Human-readable learning and publishing from TheFocus.AI — weekly dispatch, quarterly snapshots, measurements, bench recipes, and publication issues.

Deployed at **labs.thefocus.ai** (GitHub Pages).

See **`docs/publishing.md`** for the content model (cadence, pillars, lifecycle to standards).

Related surfaces:

- **thefocus.ai** — marketing (separate repo)
- **courses.thefocus.ai** — structured courses with progress tracking (separate repo)
- **standards.thefocus.ai** — canonical operational memos (separate repo)

## Structure

```
src/content/
  thoughts/     ← dispatch, quarterly, and briefs (pillar + column in frontmatter)
  recipes/      ← bench recipes (grouped by section)
  reports/      ← measurement memos (markdown)
  issues/       ← publication issues / print roll-ups
  sections/     ← issue sections
  sources/      ← citations
  concepts/     ← glossary
  assets/
    cards/      ← card images
    recipes/    ← recipe images
public/reports/ ← interactive measurement builds
docs/
  design.md       ← "The Ledger" design system
  publishing.md   ← cadence, pillars, lifecycle
scripts/
  thought-classifications.json
  apply-thought-taxonomy.mjs
```

## Design

The Labs hub uses **The Ledger** — dark operational surface, drab-olive signal color, Inter + IBM Plex Mono. See `docs/design.md`.

Publication **issues** keep the light Bell Labs memo aesthetic (`theme="magazine"`).

## Local dev

```bash
pnpm install
pnpm run dev
```

## Deploy

Push to `main`. GitHub Actions builds and deploys to GitHub Pages.

## DNS

```
Type    Name    Target
CNAME   labs    the-focus-ai.github.io
```

Until DNS propagates, the site may be reachable at:
https://the-focus-ai.github.io/labs/

## Repo

GitHub: [The-Focus-AI/labs](https://github.com/The-Focus-AI/labs)

## Migration notes

Content is being migrated out of `thefocus-landing` (Studio/posts/recipes/reports). Weekend Coding Agent lives on **courses.thefocus.ai**, not Labs.

Old `magazine.thefocus.ai` should redirect to `labs.thefocus.ai/issues` once DNS is updated.
