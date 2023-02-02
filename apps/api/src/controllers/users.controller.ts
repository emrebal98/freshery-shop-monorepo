import { prisma } from 'database';
import type { Request } from 'express';
import type { CustomResponse } from '../types/auth';

const userController = {
  /**
   * Get the current user
   * @param req Request
   * @param res Response
   * @returns Response
   */
  getMe: async (req: Request, res: CustomResponse) => {
    try {
      if (!req.user)
        return res.status(401).json({
          error: 'Unauthorized',
          message: 'Unauthorized access.',
        });
      const { id } = req.user;
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      if (!user) return res.status(404).json({ message: 'User not found' });
      return res.status(200).json({
        message: 'User found',
        data: { email: user.email, name: user.name },
      });
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  },
};

export default userController;
