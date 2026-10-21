# Design System — Sporos Mission Church

Generated with the `design-system` skill (ui-ux-pro-max). Three-layer token
architecture: **primitive → semantic → component**, per
`references/token-architecture.md`. All tokens live in
`src/styles/tokens.css` and are imported once by
`src/layouts/BaseLayout.astro`.

## Brand intent

Warm, welcoming, trustworthy — a bilingual (Chinese/English) church site.
The rose accent is a deliberate nod to the current WordPress site's pink CTA
button. Gold is the secondary accent (celebration, warmth). Deep plum is
reserved for the dark "Give" section to convey reverence.

## Palette

Adapted from the skill's **Church/Religious Organization** palette
(spiritual warmth + gold), re-anchored on rose:

| Role | Token | Value | Notes |
|---|---|---|---|
| Brand | `--color-brand` | `#a92650` (rose-700) | 7.0:1 on white — body text, links, primary buttons |
| Brand strong | `--color-brand-strong` | `#882344` (rose-800) | Hover states, emphasis |
| Brand soft | `--color-brand-soft` | `#fdf2f4` (rose-50) | Tinted section backgrounds, badges |
| Gold | `--color-gold` | `#b07218` | Secondary accents, never body text on light bg |
| Ink | `--color-ink` | `#211915` | Body text (warm, not pure black) |
| Muted | `--color-muted` | `#5f534a` | Secondary text — 7.4:1 on sand-50 |
| Surface warm | `--color-surface-warm` | `#fdfaf5` | Page background |
| Dark | `--color-dark` | `#1f0e14` (plum-950) | Give section background |
| On dark | `--color-on-dark` | `#f7ecdd` | Text on dark sections |

Full primitive scales (rose 50–900, gold, sand, ink, plum) are defined in
`tokens.css` Layer 1 for future use.

## Typography

- **Display (headings):** `"Noto Serif", "Noto Serif TC", Georgia, serif` —
  `--font-display`. Serif conveys tradition and reverence; TC variant covers
  Traditional Chinese.
- **Body:** `"Noto Sans", "Noto Sans TC", system-ui, sans-serif` —
  `--font-body`. Clean and highly legible in both languages.
- Loaded from Google Fonts with `display=swap` (unicode-range subsets keep
  Chinese font downloads scoped to used glyphs).
- Scale: `--text-hero: clamp(2.4rem, 5.6vw, 4rem)`,
  `--text-h2: clamp(1.7rem, 3.4vw, 2.5rem)`,
  `--text-h3: clamp(1.2rem, 2.2vw, 1.5rem)`,
  `--text-lead: clamp(1.05rem, 1.8vw, 1.25rem)`.
- Body line-height 1.75 (comfortable for Chinese text); headings 1.35.

## Spacing & shape

- 4px base scale (`--p-space-*`), section padding
  `--section-pad: clamp(3.5rem, 8vw, 6rem)`, container max 72rem.
- Radius: cards 1.25rem, buttons pill (999px) — friendly, matches the
  current site's rounded CTA.
- Card shadow: soft rose-tinted `0 12px 32px rgba(169,38,80,.09)`,
  deepening on hover.

## Component tokens (Layer 3)

`--btn-*` (pill, rose fill, white text, lift on hover),
`--card-*` (white, warm border, rose-tinted shadow),
`--header-*` (frosted warm-white sticky header),
`--badge-*` (rose-soft pill kickers like 最新動向).

## Rules (from the skill's pre-delivery checklist)

1. **No emojis as icons** — inline SVG only (see Header/Footer social icons).
2. **Contrast:** body text ≥ 4.5:1 (verified pairs above).
3. **Responsive:** 375 / 768 / 1024 / 1440px — single-column below 768px,
   two-column grids at ≥768px, sticky nav collapses to hamburger below 1024px.
4. **`prefers-reduced-motion`:** smooth scrolling off, all transitions and
   animations effectively disabled.
5. **Focus visible:** 3px gold outline on all interactive elements.
6. **Semantic HTML:** `header/nav/main/section/article/footer`, one `h1`
   per page, skip-to-content link.

## Anti-patterns (avoided)

- AI purple/pink gradients as brand color — rose is used deliberately and
  sparingly against warm neutrals, not as a neon gradient wash.
- Pure-black text on pure-white — warm ink on warm sand instead.
- Hardcoded color values in components — always reference tokens.

## Future

- Event poster images and hero photography will slot into the existing
  placeholder blocks (NewsEvents, hero) without token changes.
- If a dark-mode variant is ever needed, add it as a semantic-layer
  override, not new primitives.
