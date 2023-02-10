import { z } from 'zod';

const categoriesSchema = z
  .object({
    name: z.string().min(3).max(255),
    slug: z.string().min(3).max(255),
  })
  .strict();

// eslint-disable-next-line import/prefer-default-export
export { categoriesSchema };
