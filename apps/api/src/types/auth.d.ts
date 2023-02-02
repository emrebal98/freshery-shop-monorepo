import type { Response } from 'express';
import type { z } from 'zod';
import type { payloadSchema } from '../schemas/auth.schema';

type Payload = z.infer<typeof payloadSchema>;

declare global {
  namespace Express {
    interface Request {
      user?: Payload;
    }
    interface Response {
      json: Json<this>;
    }
  }
}

type ResponseJSON = {
  error?: Errors;
  message: string;
  data?: unknown;
};

type Errors =
  | 'Unauthorized'
  | 'InvalidCredentials'
  | 'ExistingUser'
  | 'Validation'
  | 'InvalidToken'
  | 'InternalServerError';

// This is the type of the json method of the response object
type Send<T = Response> = (body?: ResponseJSON) => T;

interface CustomResponse extends Response {
  json: Send<this>;
}
