import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/

// GitHub Pages builds set SITE_BASE (e.g. /sporosmission-site) via the
// deploy workflow; the production build uses '/'.
export default defineConfig({
  site: 'https://sporosmission.org',
  base: process.env.SITE_BASE || '/',
  integrations: [sitemap()],
});
