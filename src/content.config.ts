import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts. Published at WordPress-style permalinks /YYYY/MM/DD/<slug>/
 * generated from `date` + `slug` in src/pages/[year]/[month]/[day]/[slug].astro.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

/**
 * Weekly bulletin. `current.md` is overwritten each week with the new
 * bilingual bulletin (Poway + UCSD sections). Rendered at /bulletin.
 */
const bulletin = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bulletin' }),
  schema: z.object({
    title: z.string(),
    week: z.string().optional(),
  }),
});

export const collections = { blog, bulletin };
