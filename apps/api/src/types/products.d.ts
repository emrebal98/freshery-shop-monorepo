import type { z } from 'zod';
import type { productSchema } from '../schemas/products.schema';

type ProductData = z.infer<typeof productSchema>;
