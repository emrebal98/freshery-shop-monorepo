import { Prisma } from 'database';
import { z } from 'zod';
import type { CustomResponse } from '../types/auth';
import getValidationMessage from './getValidationMessage';

/**
 * Handle error function
 * @param error Error
 * @param res Response
 * @returns Response
 */
const handleError = (error: unknown, res: CustomResponse) => {
  // Check if the error is a validation error
  if (error instanceof z.ZodError) {
    return res.status(400).json({
      error: 'Validation',
      message: 'Validation error.',
      data: getValidationMessage(error),
    });
  }
  // Check if the error is a database error
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Check if the error is contstraint violation
    if (error.code === 'P2002') {
      return res.status(400).json({
        error: 'UniqueConstraint',
        message: 'Unique constraint violation.',
        data: error.meta?.target,
      });
    }
    return res.status(400).json({
      error: 'Database',
      message: 'Database error.',
    });
  }
  // Return the internal server error
  return res.status(500).json({
    error: 'InternalServerError',
    message: 'Something went wrong.',
  });
};

export default handleError;
