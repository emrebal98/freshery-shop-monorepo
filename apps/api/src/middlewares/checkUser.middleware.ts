import { prisma } from 'database';
import type { NextFunction, Request, Response } from 'express';

const checkUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get the user id from the request payload
    const { id } = req.payload;
    // Get the user from the database
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    // If the user is not found, return an error
    if (!user)
      return res
        .status(404)
        .json({ error: 'NotFound', message: 'User not found.' });
    // Add the user to the request object
    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
    // Call the next middleware
    return next();
  } catch (error) {
    return res.status(500).json({
      error: 'InternalServerError',
      message: 'Something went wrong.',
    });
  }
};
export default checkUser;
