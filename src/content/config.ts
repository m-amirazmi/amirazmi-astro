import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().default('tutorial'),
    tags: z.array(z.string()).default(['others']),
    authors: z.string().default('Muhamad Amir'),
  }),
});

export const collections = { blog };
