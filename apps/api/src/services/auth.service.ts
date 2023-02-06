import { prisma, type Prisma } from 'database';
import type { UserData } from '../types/auth';

const authService = {
  /**
   * Get one user by unique input
   * @param where  Prisma.UserWhereUniqueInput
   * @returns  User
   */
  getUser: async (where: Prisma.UserWhereUniqueInput) => {
    // Get the user from the database
    const user = await prisma.user.findUnique({
      where,
    });
    return user;
  },
  /**
   * Create a user
   * @param userData User data
   * @returns User
   */
  createUser: async (userData: UserData) => {
    // Create the user in the database
    const user = await prisma.user.create({
      data: userData,
    });
    return user;
  },
  /**
   * Update a user refresh token
   * @param id User id
   * @param refreshToken Refresh token
   * @returns User
   */
  updateUserRefreshToken: async (id: string, refreshToken: string) => {
    // Update the user in the database
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        refreshToken,
      },
    });
    return user;
  },
};

export default authService;
