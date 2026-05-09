import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const paintings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paintings' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    titleEn: z.string(),
    year: z.number(),
    wildensteinNumber: z.string(),
    dimensionsCm: z.object({ height: z.number(), width: z.number() }).optional(),
    currentLocation: z.string(),
    museumUrl: z.string().url().optional(),
    imageUrl: z.string(),
    imageThumbUrl: z.string(),
    paintedFrom: z.object({ lat: z.number(), lng: z.number() }).optional(),
    subjects: z.array(
      z.enum(['church', 'seine', 'road', 'garden', 'snow', 'poppy-field', 'island', 'lavacourt'])
    ),
    period: z.enum(['1878-1881', '1901-lavacourt']),
  }),
});

export const collections = { paintings };
