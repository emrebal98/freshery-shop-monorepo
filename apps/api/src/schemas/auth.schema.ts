import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const refreshTokenSchema = z.string();

const payloadSchema = z.object({
  id: z.string(),
  email: z.string().email(),
});

export { userSchema, refreshTokenSchema, payloadSchema };
