import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['production', 'in-progress', 'planned']),
    tags: z.array(z.string()),
    description: z.string(),
    link: z.string().url().optional(),
    category: z.enum(['data-engineering', 'data-analysis', 'web', 'tools']),
    order: z.number(),
  }),
});

export const collections = { projects };
