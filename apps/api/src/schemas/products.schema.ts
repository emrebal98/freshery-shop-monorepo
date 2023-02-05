import { z } from 'zod';

const productSchema = z
  .object({
    name: z.string().min(3).max(255),
    slug: z.string().min(3).max(255),
    description: z.string().min(3).max(255).optional(),
    shortDescription: z.string().min(3).max(255).optional(),
    price: z
      .number()
      .min(0)
      .refine((x) => x * 100 - Math.trunc(x * 100) < Number.EPSILON),
    stock: z.number().min(0),
    images: z
      .array(
        z.object({
          name: z.string().min(3).max(255),
          sort: z.number().min(0),
        })
      )
      .optional(),
  })
  .strict();

// eslint-disable-next-line import/prefer-default-export
export { productSchema };
