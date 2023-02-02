import { z } from 'zod';

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  API_PORT: z.string().regex(/^\d+$/).optional(), // port number
  JWT_SECRET: z.string(),
  JWT_TOKEN_EXPIRES_IN: z.string().regex(/^\d+$/), // seconds,
  JWT_REFRESH_TOKEN_EXPIRES_IN: z.string().regex(/^\d+$/), // seconds,
});

/**
 * Specify your server-side environment variables here.
 * @type {{ [k in keyof z.input<typeof serverSchema>]: string | undefined }}
 */
export const serverEnv = {
  ...process.env,
};
