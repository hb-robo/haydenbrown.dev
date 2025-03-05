import { rssSchema } from '@astrojs/rss';
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './content/blog', pattern: '**/*.{md,mdx}' }),
	schema: rssSchema.extend({
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(), // Adding tags as an array of strings
	}),
});

export const collections = { blog };
