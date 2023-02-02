import type { NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../env/server';
import type { CustomResponse, Payload } from '../types/auth';

const authenticate = (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  // Get the token from the request headers
  const { token } = req.cookies;
  // If the token is not found, return an error
  if (!token)
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'No token provided.',
    });
  try {
    // Verify the token
    const decoded = <Payload>jwt.verify(token, env.JWT_SECRET);
    // Set the user in the request
    req.user = decoded;
    return next();
  } catch (error) {
    // If the token is invalid, return an error
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid token.',
    });
  }
};

export default authenticate;
