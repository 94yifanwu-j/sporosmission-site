# AGENTS.md — sporosmission-site

This file is for AI agents (Muse, OpenCode, or any other) working in this
repo. Follow these conventions on every change.

## Project overview

Static website for **Sporos Mission Church** (施普絡世宣教中心), a bilingual
Chinese/English church in San Diego. Migrated from WordPress.
- Framework: **Astro 5**, static output, TypeScript.
- Hosting: **GitHub Pages** (auto-deploys on push to `main` via
`.github/workflows/deploy-pages.yml`). **Cloudflare Pages** for
`sporosmission.org` is planned but not yet set up.
- Domain: `https://sporosmission.org` (see `astro.config.mjs` → `site`).
- Design tokens: `src/styles/tokens.css` (three-layer: primitive → semantic
→ component; documented in `docs/design-system.md`).

## How to publish the weekly bulletin

1. Edit `src/content/bulletin/current.md` — **overwrite the body**, keep the
structure: `## Poway 堂主日報告事項` and `## UCSD 大學城堂主日報告事項`.
2. Update the frontmatter `week:` to the current week
(e.g. `2026年10月25日當週`).
3. Content must be **bilingual (Chinese + English)**. No lorem ipsum.
4. Commit and push to `main`. GitHub Pages rebuilds and deploys
automatically via the workflow — no manual deploy step.

## How to add a blog post

1. Create `src/content/blog/<slug>.md` with frontmatter:
```yaml
title: "標題"
date: 2025-04-10
slug: "my-post-slug"
category: "劉三講古" # optional
tags: ["文章"] # optional
description: "…" # optional, used for SEO meta
```
2. The published URL is derived from `date` + `slug`:
`/YYYY/MM/DD/<slug>/` (e.g. `/2025/04/10/my-post-slug/`). This preserves
the old WordPress permalink structure — do not change the scheme.
3. Body is Markdown, bilingual preferred. Commit + push to `main`.

## Editing pages

- Homepage sections: `src/components/` (`Hero`, `NewsEvents`, `Give`,
`Worship`, `Location`) composed in `src/pages/index.astro`.
- Shared chrome: `src/components/Header.astro`, `src/components/Footer.astro`,
`src/layouts/BaseLayout.astro` (head tags, fonts, SEO meta).
- `/bulletin` → `src/pages/bulletin.astro`; `/blog` → `src/pages/blog/index.astro`;
dated post URLs → `src/pages/[year]/[month]/[day]/[slug].astro`.

## Design rules

- **Always use design tokens** from `src/styles/tokens.css`
(`var(--color-brand)`, `var(--card-radius)`, …). Never hardcode hex colors,
font families, or spacing values in components.
- Chinese text must render correctly: the layout already loads
Noto Sans TC / Noto Serif TC — just use the token font stacks.
- No emojis as icons — inline SVG only.
- Keep text contrast ≥ 4.5:1; respect `prefers-reduced-motion`
(already handled globally in tokens.css).
- Responsive: verify 375px and 1440px widths when changing layouts.

## Commands

```bash
npm install # install dependencies
npm run dev # local dev server (http://localhost:4321)
npm run build # production build → dist/ (must pass before push)
npm run preview # preview the production build locally
```

## Content rules

- **No lorem ipsum, ever.** Every visible string must be real content,
bilingual where the live site is bilingual.
- Preserve existing URLs and slugs — external links and SEO depend on them.
- Social/donation links are real and must stay correct:
YouTube `https://www.youtube.com/@sporos-mission-church`,
Instagram `https://www.instagram.com/sporosmission`,
Line group `https://line.me/ti/g/Dys7J8yxVH`,
Zeffy `https://www.zeffy.com/en-US/donation-form/general-donation-204`.
- Contact facts: Email `sporosmission@gmail.com`, WeChat `wuyifan94`,
phone `+1 (951)-903-2666`.
