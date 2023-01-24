import { prisma } from 'database';
import type { Request, Response } from 'express';

const userController = {
  getAllUsers: async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  },
  getUserById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(user);
  },
};

export default userController;
