import { prisma } from 'database';
import type { Request } from 'express';
import type { CustomResponse } from '../types/auth';

const usersController = {
  /**
   * Get the current user
   * @param req Request
   * @param res Response
   * @returns Response
   */
  getMe: async (req: Request, res: CustomResponse) => {
    try {
      const { id } = req.payload;
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      if (!user)
        return res
          .status(404)
          .json({ error: 'NotFound', message: 'User not found.' });
      return res.status(200).json({
        message: 'User found',
        data: { email: user.email, name: user.name },
      });
    } catch (error) {
      return res.status(500).json({
        error: 'InternalServerError',
        message: 'Something went wrong.',
      });
    }
  },
};

export default usersController;
