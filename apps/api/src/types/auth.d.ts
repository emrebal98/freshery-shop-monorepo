import type { User } from 'database';
import type { Response } from 'express';
import type { z } from 'zod';
import type { payloadSchema, userSchema } from '../schemas/auth.schema';

type Payload = z.infer<typeof payloadSchema>;

type UserData = z.infer<typeof userSchema>;

declare global {
  namespace Express {
    interface Request {
      payload: Payload;
      user: {
        id: User['id'];
        email: User['email'];
        name: User['name'];
        role: User['role'];
      };
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
  | 'InternalServerError'
  | 'NotFound'
  | 'Database'
  | 'Forbidden'
  | 'UniqueConstraint';

// This is the type of the json method of the response object
type Send<T = Response> = (body?: ResponseJSON) => T;

interface CustomResponse extends Response {
  json: Send<this>;
}
