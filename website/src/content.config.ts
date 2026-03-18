import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lectures = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/lectures' }),
  schema: z.object({
    title: z.string(),
    week: z.number(),
    chapters: z.string(),
    topics: z.string(),
    date: z.string().optional(),
  }),
});

const homework = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/homework' }),
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    dueDate: z.string().optional(),
  }),
});

export const collections = { lectures, homework };
