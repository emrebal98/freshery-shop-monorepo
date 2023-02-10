import type { z } from 'zod';
import type { categoriesSchema } from '../schemas/categories.schema';

type CategoryData = z.infer<typeof categoriesSchema>;
