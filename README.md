# TheFocus.AI Labs

Human-readable learning and publishing from TheFocus.AI — thoughts, interactive reports, recipes, and the publication issue line (STATE, SURFACE, RUNTIME, HARNESS, LOCAL, WIRE).

Deployed at **labs.thefocus.ai** (GitHub Pages).

Related surfaces:

- **thefocus.ai** — marketing (separate repo)
- **courses.thefocus.ai** — structured courses with progress tracking (separate repo)
- **standards.thefocus.ai** — canonical operational memos (separate repo)

## Structure

```
src/content/
  thoughts/     ← essays and field notes (migrated from thefocus-landing posts)
  recipes/      ← hands-on recipes
  reports/      ← report memos (markdown)
  issues/       ← publication issues
  sections/     ← issue sections
  sources/      ← citations
  concepts/     ← glossary
  assets/
    cards/      ← thought & report card images
    recipes/    ← recipe images
public/reports/ ← interactive report builds (JSON data, static subsites)
docs/design.md  ← "The Ledger" design system (from thefocus-v2)
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
