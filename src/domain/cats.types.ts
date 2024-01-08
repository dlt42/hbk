import { z } from 'zod';

export const catSchema = z.object({
  id: z.string(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
  mime_type: z.string().optional(),
  breeds: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      weight: z
        .string()
        .or(z.object({ imperial: z.string(), metric: z.string() })),
      height: z.string().optional(),
      life_span: z.string(),
      breed_group: z.string().optional(),
    })
  ),
});

export const catsSchema = z.array(catSchema);

export type Cat = z.infer<typeof catSchema>;

export type Cats = z.infer<typeof catsSchema>;
