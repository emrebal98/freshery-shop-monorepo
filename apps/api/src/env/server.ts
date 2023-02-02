import logger from 'logger';
import getValidationMessage from '../utils/getValidationMessage';
import { serverEnv, serverSchema } from './schema';

const sEnv = serverSchema.safeParse(serverEnv);

if (!sEnv.success) {
  const errors = logger.child({
    errors: getValidationMessage(sEnv.error),
  });
  errors.error(`❌ Invalid environment variables:`);
  throw new Error('Invalid environment variables');
}

// eslint-disable-next-line import/prefer-default-export
export const env = { ...sEnv.data };
