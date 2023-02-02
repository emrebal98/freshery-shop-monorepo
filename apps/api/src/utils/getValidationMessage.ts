import type { ZodError } from 'zod';

const getValidationMessage = (error: ZodError) => {
  const result = error.issues.map((is) => ({
    [is.path[0]]: is.message,
  }));

  return result;
};

export default getValidationMessage;
