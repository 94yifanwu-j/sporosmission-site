# 施普絡世宣教中心 Sporos Mission Church — Website

Static website for [sporosmission.org](https://sporosmission.org), migrated
from WordPress. Bilingual Chinese/English.

## Tech stack

- [Astro 5](https://astro.build) — static site generator, TypeScript
- `@astrojs/sitemap` — XML sitemap
- No CSS framework; design tokens in `src/styles/tokens.css`
  (see [`docs/design-system.md`](docs/design-system.md))
- Fonts: Noto Sans / Noto Serif (+ TC variants) via Google Fonts

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the dist/ build
```

## Deployment (Cloudflare Pages)

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, select the `sporosmission-site` repo.
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - Framework preset: `Astro` (or None — the two settings above are what matter)
3. Every push to `main` triggers an automatic rebuild and deploy.
4. Custom domain: **Pages project → Custom domains → Set up** →
   add `sporosmission.org` (and `www` if desired). If the domain's DNS is
   already on Cloudflare, this is a one-click CNAME; otherwise update the
   nameservers at the registrar to Cloudflare's.

## Weekly bulletin workflow

The pastor sends the weekly bulletin text to Muse (phone/chat); the agent
updates `src/content/bulletin/current.md`, commits, and pushes to `main` —
Cloudflare Pages deploys automatically. Details in `AGENTS.md`.

## Project structure

```
src/
  components/   Header, Hero, NewsEvents, Give, Worship, Location, Footer, YouTubeEmbed
  layouts/      BaseLayout.astro (head, fonts, SEO)
  pages/
    index.astro                 → /
    bulletin.astro              → /bulletin
    blog/index.astro            → /blog
    [year]/[month]/[day]/[slug].astro → /YYYY/MM/DD/<slug>/ (WP permalinks)
  content/
    blog/*.md                   blog posts (content collection)
    bulletin/current.md         weekly bulletin (overwritten each week)
  styles/tokens.css             design tokens (primitive → semantic → component)
docs/design-system.md           design documentation
AGENTS.md                       agent working conventions (Muse + OpenCode)
```
