---
version: 1.0
name: TheFocus.AI — "The Ledger"
description: A dark operational command surface for TheFocus.AI, an AI-implementation
  consultancy. The system reads like an instrument panel for a serious operator — a
  near-black canvas, hairline borders, a single drab-olive signal color (never neon),
  IBM Plex Mono for labels and figures, and Inter for everything else. Proof is framed
  in outcomes and P&L. The mood is confident, measured, and anti-hype: nothing
  decorative, every element earns its place. The signature move is the pairing of a
  flat near-black field with a faint 24px "ledger grid" texture and disciplined
  monospace numbering (01 — FIND), so the page feels engineered and accountable
  rather than marketed.
colors:
  canvas:        "#0A0A0A"
  surface:       "#111111"
  signal:        "#556B2F"
  text:          "#E5E5E5"
  text-strong:   "#FFFFFF"
  text-2:        "#B0B0B0"
  muted:         "#999999"
  muted-soft:    "#666666"
  on-signal:     "#FFFFFF"
  cta-bg:        "#FFFFFF"
  cta-text:      "#000000"
  border:        "rgba(255,255,255,0.10)"
  border-strong: "rgba(255,255,255,0.20)"
  hover-fill:    "rgba(255,255,255,0.05)"
  grid-line:     "#222222"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.35
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  section-label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "1.5px"
    textTransform: uppercase
  mono-label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "1px"
  mono-figure:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: 16px
    fontWeight: 500
spacing:
  base: 4px
  gutter: 32px
  section-y: 64px
  card-pad: 32px
rounded:
  none: 0px
  note: "Sharp corners are the default. The system is square. No pills, no rounded cards."
container:
  max: 1280px
  align: left
---

## 1. Visual Theme & Atmosphere

TheFocus.AI is a small consultancy that finds where AI actually pays in a business
and builds it. The site has to look like the work: measured, accountable, free of
hype. "The Ledger" delivers that as a **dark operational command surface** — the
natural environment of an operator who reads numbers for a living.

The base is a near-black canvas (`{colors.canvas}` — #0A0A0A) with a slightly raised
panel surface (`{colors.surface}` — #111111). Containment comes from **hairline
borders** (`{colors.border}` — white at 10%), never from shadows. The one chromatic
voice is a **drab olive** (`{colors.signal}` — #556B2F) — a deliberately
un-saturated, almost military-spec green that signals "considered," not "tech-neon."
It appears only on labels, the mark, eyebrows, and small markers. The primary CTA is
the inverse: solid white on black, the loudest thing on the page, used once or twice.

Typography runs a dual register: **Inter** for all headlines and prose (semibold,
tight tracking at display sizes) and **IBM Plex Mono** for step labels and figures
(`01 — FIND`). The monospace is the "accounting" voice — it makes the page feel
engineered and auditable.

The signature texture is the **ledger grid**: a faint 24px square grid
(`{colors.grid-line}` — #222) used sparingly behind hero/feature zones to evoke graph
paper and ledger ruling without becoming decorative noise.

**Key Characteristics**
- Near-black canvas (#0A0A0A) as the primary identity — not a "dark mode," the
  default state.
- Single drab-olive accent (#556B2F). Never neon. Used scarcely.
- Hairline white-alpha borders for all containment; zero drop shadows.
- Inter (semibold, tight) for display; IBM Plex Mono for labels and numbers.
- Sharp corners everywhere — the system is square. No pills, no rounded cards.
- Outcome/P&L framing for proof (percentages, multipliers, dollars).
- Optional faint 24px ledger-grid texture for engineered, accountable feel.

## 2. Color Palette & Roles

### Brand & Signal
- **Signal Olive** (`{colors.signal}` — #556B2F): The sole brand accent. Section
  labels, eyebrows, the logo glyph, mono step numbers, inline check icons. Never used
  as a large fill; it's punctuation, not paint.

### Surface
- **Canvas** (`{colors.canvas}` — #0A0A0A): Default page background.
- **Surface** (`{colors.surface}` — #111111): Raised panels — feature cards, the
  problem band, any contained block. One step up from canvas.

### Text
- **Text** (`{colors.text}` — #E5E5E5): Default body text on canvas.
- **Text Strong** (`{colors.text-strong}` — #FFFFFF): Emphasized inline figures and
  high-priority words inside body copy.
- **Text 2** (`{colors.text-2}` — #B0B0B0): Lead paragraphs, secondary descriptions.
- **Muted** (`{colors.muted}` — #999999): Card body copy, tertiary text.
- **Muted Soft** (`{colors.muted-soft}` — #666666): Fine print, labels like "Recent
  outcomes," disabled/least-priority text.

### CTA
- **CTA Background** (`{colors.cta-bg}` — #FFFFFF) / **CTA Text** (`{colors.cta-text}`
  — #000000): The primary button. Maximum contrast, used 1–2× per page.

### Lines & States
- **Border** (`{colors.border}` — white 10%): Standard hairline for nav, sections,
  cards.
- **Border Strong** (`{colors.border-strong}` — white 20%): Secondary/ghost button
  outlines.
- **Hover Fill** (`{colors.hover-fill}` — white 5%): Ghost button + nav hover wash.
- **Grid Line** (`{colors.grid-line}` — #222): Ledger-grid texture only.

> The palette is intentionally tiny: black, two grays of surface, four grays of text,
> one olive, white. Introducing a second accent color is off-brand.

## 3. Typography Rules

### Font Family
- **Display & Body**: `Inter` (fallback `system-ui, sans-serif`). One sans does both
  jobs — semibold with tight tracking for headlines, regular for prose.
- **Labels & Figures**: `IBM Plex Mono` (fallback `ui-monospace, monospace`). Step
  labels, numeric callouts, technical metadata.

### Hierarchy

| Token | Font | Size | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `{typography.display}` | Inter | 60px | 600 | -0.03em | Hero h1 |
| `{typography.h2}` | Inter | 30px | 600 | -0.01em | Section headings |
| `{typography.title}` | Inter | 20px | 500 | 0 | Card titles, feature statements |
| `{typography.lead}` | Inter | 20px | 400 | 0 | Hero sub, lead paragraphs (#B0B0B0) |
| `{typography.body}` | Inter | 15px | 400 | 0 | Default running text |
| `{typography.small}` | Inter | 14px | 400 | 0 | Proof rows, compact copy |
| `{typography.section-label}` | Inter | 10px | 500 | 1.5px / UPPER | Eyebrows ("THE REALITY") in olive |
| `{typography.mono-label}` | IBM Plex Mono | 12px | 500 | 1px | Step labels ("01 — FIND") in olive |
| `{typography.mono-figure}` | IBM Plex Mono | 16px+ | 500 | 0 | Numeric figures |

### Principles
- **Headlines: Inter semibold, tight negative tracking.** Display sizes use
  `-0.03em`; never go lighter than 600 for headings or the voice softens.
- **Two label systems, two jobs.** `section-label` (Inter, uppercase, 1.5px) marks
  editorial sections; `mono-label` (Plex Mono) marks procedural/numbered steps. Both
  render in Signal Olive. Don't mix them.
- **Numbers are monospace.** Any figure meant as proof (%, ×, $) reads better in Plex
  Mono or as Inter `text-strong` against muted body.
- **Body breathes at 1.6; headlines compress to 1.05–1.15.** The contrast carries
  hierarchy without weight changes.

## 4. Component Stylings

### Buttons
**Primary (Solid White)** — `bg {colors.cta-bg}`, `text {colors.cta-text}`, padding
`32px × 14px`, font Inter 14px/500, **0px radius**, hover → white at 90%. The single
loudest element; 1–2 per page.

**Secondary (Ghost)** — transparent bg, `1px {colors.border-strong}` outline, text
`{colors.text}`, same padding, 0px radius, hover → `{colors.hover-fill}` wash.

**Nav CTA** — smaller ghost variant (`px 20 / py 8`) with `{colors.border-strong}`
outline.

### Cards (Feature)
- Background `{colors.surface}` (#111), `1px {colors.border}`, **0px radius**, padding
  `{spacing.card-pad}` (32px).
- Top: `mono-label` in olive ("01 — FIND").
- Then a `title` statement (20px/500, white).
- Then `body` description in `{colors.muted}` (#999).
- No shadow, no hover elevation. Border is the only container.

### Navigation
- Top bar, `1px {colors.border}` bottom rule, transparent on canvas.
- Left: logo glyph (square olive mark) + "TheFocus" wordmark (Inter 600).
- Right: text links (Inter 14px, `{colors.text-2}` → white on hover) + one ghost CTA.

### Logo Glyph
- A 20px square with `1px {colors.signal}` border containing an 8px solid
  `{colors.signal}` square. A target / register-mark — measurement made into a mark.

### Section Bands
- **Default**: canvas background, content in `{container.max}` (1280px), left-aligned,
  `{spacing.section-y}` (64px) vertical padding, separated by `1px {colors.border}`
  top/bottom rules.
- **Surface band** (e.g. the problem statement): `{colors.surface}` background with
  `border-y {colors.border}` — a slightly raised plate breaking the canvas rhythm.

### Proof / Outcomes Row
- A horizontal strip under a `1px {colors.border}` top rule, label "Recent outcomes"
  in `{colors.muted-soft}`, then inline metrics: figure in `{colors.text-strong}`
  (white, 500) followed by the descriptor in `{colors.text-2}`.

### Inline Markers
- Check icon (`fa-check`) in `{colors.signal}` before microcopy ("6–8 week
  engagements. No retainers.").

## 5. Layout Principles

### Spacing
- Base unit **4px**. Page gutter `{spacing.gutter}` (32px). Section vertical rhythm
  `{spacing.section-y}` (56–64px). Card padding `{spacing.card-pad}` (32px).

### Grid & Container
- Max content width `{container.max}` (~1280px, `max-w-screen-xl`), centered, content
  **left-aligned** (not centered text).
- 12-column grid for asymmetric splits (e.g. problem band = 5 cols heading / 7 cols
  body).
- Feature method = 3 equal columns at desktop, stacking to 1 on mobile.

### Whitespace Philosophy
Generous vertical voids between bands; tight, dense clusters within. The page should
feel like a well-kept ledger — ruled, aligned, nothing floating.

### Ledger-Grid Texture
The `.ledger-grid` utility (24px square grid in `{colors.grid-line}`) may back the
hero or a feature zone at low contrast. Use sparingly — it is texture, not wallpaper.

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | Canvas sections, nav |
| Hairline | `1px {colors.border}` | Cards, section rules, nav divider |
| Raised plate | `{colors.surface}` fill + hairline | Problem band, contained panels |

**Depth is colorimetric and border-based, never shadow-based.** #0A0A0A (ground) →
#111111 (raised) → hairline borders for edges. No `box-shadow` anywhere. Nothing
"hovers"; everything is mounted to the surface.

## 7. Do's and Don'ts

### Do
- Keep the canvas near-black (#0A0A0A) and surfaces at #111111.
- Reserve the olive (#556B2F) for labels, the mark, and small markers — punctuation.
- Use solid-white CTAs as the single loudest element, 1–2 per page.
- Set headlines in Inter 600 with tight negative tracking.
- Use IBM Plex Mono for step labels and proof figures.
- Keep every corner sharp (0px radius).
- Contain with hairline borders; communicate depth with surface color.
- Frame proof in outcomes / P&L (%, ×, $).

### Don't
- Don't use a neon or saturated green — the olive is muted on purpose.
- Don't introduce a second accent color or any gradient.
- Don't add drop shadows or rounded corners.
- Don't center body text or float cards.
- Don't let the olive become a large fill.
- Don't soften headline weight below 600.
- Don't overuse the ledger grid until it reads as decoration.
- Don't write hype ("revolutionary," "cutting-edge," "agentic enterprise") — see the
  brand voice rule.

## 8. Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav links collapse; hero h1 ~36–40px; 12-col splits stack; method 3-up → 1-up; outcomes wrap to column |
| Tablet | 768–1024px | Nav stays horizontal; method 3-up may go 2-up; container gutters tighten |
| Desktop | 1024–1280px | Full layout; 3-up method; left-aligned 1280px container |
| Wide | > 1280px | Container caps at 1280px with added outer margin |

- **Touch targets** ≥ 44px; buttons keep 32×14 padding (height ~44px).
- **Type scale** reduces hero from 60px → ~36px on mobile; tight tracking relaxes
  slightly.
- **Ledger grid** stays 24px (does not scale per breakpoint).

## 9. Agent Prompt Guide

### Quick Reference
```
Canvas:        #0A0A0A
Surface:       #111111
Signal (olive):#556B2F   (labels/mark only — never neon, never large fill)
Text:          #E5E5E5   Strong: #FFFFFF
Text 2:        #B0B0B0   Muted: #999999 / #666666
Border:        rgba(255,255,255,0.10)  Strong: rgba(255,255,255,0.20)
CTA:           white bg / black text   (1–2 per page)
Grid line:     #222 on 24px square grid (.ledger-grid, sparing)
Display/Body:  Inter (h1 600 / -0.03em)
Labels/Figures:IBM Plex Mono ("01 — FIND")
Radius:        0px everywhere
```

### Example Prompts
**Hero:** "Dark hero on #0A0A0A. Olive (#556B2F) uppercase 10px/1.5px eyebrow. Inter
60px/600 headline with -0.03em tracking in #E5E5E5. 20px lead in #B0B0B0. Two
buttons: solid white-on-black primary and a hairline ghost (1px white/20). Below, a
small olive check + '6–8 week engagements. No retainers.' in #666. All corners
square."

**Method (3-up):** "Three equal cards on #0A0A0A, each #111 with a 1px white/10
border, 0px radius, 32px padding. Top: IBM Plex Mono 12px olive label '01 — FIND'.
Then a 20px/500 white statement, then 14px #999 description. No shadows."

**Proof row:** "Under a 1px white/10 top rule: 'Recent outcomes' in #666, then inline
metrics — white 500 figure ('17%', '3.2x', '$420k') followed by a #B0B0B0
descriptor."

### Iteration Guide
1. Start on #0A0A0A; text #E5E5E5; borders white/10.
2. Add olive labels (uppercase Inter or mono "01 —") as the only color.
3. One solid-white CTA. Everything else is ghost or text.
4. Inter 600 tight headlines; Plex Mono labels/figures.
5. Square corners, no shadows, surface = #111 for raised plates.
6. Reach for the 24px ledger grid only when a zone feels empty.

## Reference
- Locked source mockup: `mockups/sample-dark.html`.
- Brand voice + banned language: `.cursor/rules/brand-voice.mdc` and the slop linter
  (`scripts/slop-lint.mjs`). Copy decisions live in `brand/brand-brief.md`.
- Anti-pattern note: this system sits in the dark + Plex-Mono + Inter family (Sanity,
  Vercel, Linear). Our differentiation is the drab-olive accent (not neon), the
  ledger-grid texture, and outcome/P&L copy. Hold those three or the work drifts
  toward generic.
