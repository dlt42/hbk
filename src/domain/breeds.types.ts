import { z } from 'zod';

import { DetailsContent } from '../ui/components/Details';

const bool = z.coerce.boolean();

export const breedSchema = z.object({
  weight: z.object({
    imperial: z.string(),
    metric: z.string(),
  }),
  id: z.string(),
  name: z.string(),
  cfa_url: z.string().optional(),
  vetstreet_url: z.string().optional(),
  vcahospitals_url: z.string().optional(),
  temperament: z.string(),
  origin: z.string(),
  country_codes: z.string(),
  country_code: z.string(),
  description: z.string(),
  life_span: z.string(),
  indoor: bool,
  lap: bool,
  alt_names: z.string().optional(),
  adaptability: z.number(),
  affection_level: z.number(),
  child_friendly: z.number(),
  dog_friendly: z.number(),
  energy_level: z.number(),
  grooming: bool,
  health_issues: bool,
  intelligence: z.number(),
  shedding_level: z.number(),
  social_needs: z.number(),
  stranger_friendly: z.number(),
  vocalisation: z.number(),
  hairless: bool,
  natural: bool,
  rare: bool,
  rex: bool,
  suppressed_tail: bool,
  short_legs: bool,
  wikipedia_url: z.string().optional(),
  hypoallergenic: bool,
  reference_image_id: z.string().optional(),
  image: z
    .object({
      id: z.string(),
      width: z.number(),
      height: z.number(),
      url: z.string(),
    })
    .optional(),
});

export const breedsSchema = z.array(breedSchema);

export type Breed = z.infer<typeof breedSchema>;

export type Breeds = z.infer<typeof breedsSchema>;

export type GetDisplayDataResponse = {
  resultLabel: string;
  resultValue: string | number | null;
  resultTarget: keyof DetailsContent | null;
} | null;
