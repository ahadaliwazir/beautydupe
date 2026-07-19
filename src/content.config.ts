import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.enum(['beauty-tech', 'dupes', 'mens-grooming', 'guides']),
		rating: z.number().optional(),
		pros: z.array(z.string()).optional(),
		cons: z.array(z.string()).optional(),
		affiliateLink: z.string().optional(),
		price: z.string().optional(),
		dupeFor: z.string().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
