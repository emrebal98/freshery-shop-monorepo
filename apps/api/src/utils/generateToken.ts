import jwt from 'jsonwebtoken';
import { env } from '../env/server';
import type { Payload } from '../types/auth';

const generateToken = (payload: Payload, type?: 'refresh') => {
  if (type === 'refresh') {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_REFRESH_TOKEN_EXPIRES_IN,
    });
  }
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_TOKEN_EXPIRES_IN,
  });
};

export default generateToken;
