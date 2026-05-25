import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['production', 'in-progress', 'planned', 'shelved']),
    tags: z.array(z.string()),
    description: z.string(),
    link: z.url().optional(),
    category: z.enum(['data-engineering', 'data-analysis', 'data-modeling', 'web', 'tools']),
    order: z.number(),
  }),
});

export const collections = { projects };
