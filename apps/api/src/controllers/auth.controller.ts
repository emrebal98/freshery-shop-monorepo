import bcrypt from 'bcrypt';
import type { Request } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../env/server';
import {
  payloadSchema,
  refreshTokenSchema,
  userSchema,
} from '../schemas/auth.schema';
import { authService } from '../services';
import type { CustomResponse } from '../types/auth';
import { generateToken, handleError } from '../utils';

const authController = {
  /**
   * Refresh the access token
   * @param req Request
   * @param res Response
   * @returns Response
   */
  refreshToken: async (req: Request, res: CustomResponse) => {
    try {
      // Get the refresh token from the request body
      const refreshToken = refreshTokenSchema.parse(req.cookies.refreshToken);
      // Verify and validate the refresh token
      const decodedPayload = payloadSchema.parse(
        jwt.verify(refreshToken, env.JWT_SECRET)
      );
      // Look up the refresh token in the database
      const user = await authService.getUser({ refreshToken });
      // If the user is not found, return an error
      if (!user) {
        return res.status(400).json({
          error: 'InvalidCredentials',
          message: 'Invalid email or password.',
        });
      }
      // Create a new access token
      const token = generateToken(decodedPayload);
      // Send new JWT as a secure cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 1000 * Number(env.JWT_TOKEN_EXPIRES_IN), // 1 day,
      });
      // Send the response
      return res.status(200).json({ message: 'Refresh successful.' });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
  /**
   * Login a user
   * @param req Request
   * @param res Response
   * @returns Response
   */
  login: async (req: Request, res: CustomResponse) => {
    try {
      // Validate the request body with the userSchema
      const { email, password } = userSchema.parse(req.body);
      // Check if the email exists in the database
      const user = await authService.getUser({ email });
      if (!user) {
        return res.status(400).json({
          error: 'InvalidCredentials',
          message: 'Invalid email or password.',
        });
      }
      // Check if the password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({
          error: 'InvalidCredentials',
          message: 'Invalid email or password.',
        });
      }
      // Create the payload
      const payload = payloadSchema.parse({
        id: user.id,
        email: user.email,
      });
      // If the passwords match, create a JSON Web Token
      const token = generateToken(payload);
      // Create a refresh token
      const refreshToken = generateToken(payload, 'refresh');
      // Set the refresh token in the database
      await authService.updateUserRefreshToken(user.id, refreshToken);
      // Set the token and refresh token in secure cookies
      res.cookie('token', token, {
        httpOnly: true,
        secure: env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 1000 * Number(env.JWT_TOKEN_EXPIRES_IN), // 1 day,
      });
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 1000 * Number(env.JWT_REFRESH_TOKEN_EXPIRES_IN), // 7 days,
      });
      // Send the response
      return res.status(200).json({ message: 'Login successful.' });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
  /**
   * Register a new user
   * @param req Request
   * @param res Response
   * @returns Response
   */
  register: async (req: Request, res: CustomResponse) => {
    try {
      // Validate the request body with the userSchema
      const { email, password } = userSchema.parse(req.body);
      // Check if the email already exists in the database
      const userExists = await authService.getUser({ email });
      if (userExists) {
        return res.status(400).json({
          error: 'ExistingUser',
          message: 'Email already exists.',
        });
      }
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // Create the user in the database
      await authService.createUser({
        email,
        password: hashedPassword,
      });
      // Send the response
      return res.status(201).json({
        message: 'Registration successful.',
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
};

export default authController;
