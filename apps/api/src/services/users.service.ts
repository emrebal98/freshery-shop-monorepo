import { prisma, type Prisma } from 'database';

const usersService = {
  /**
   * Get one user by unique input
   * @param where  Prisma.UserWhereUniqueInput
   * @returns  User
   */
  getOne: async (where: Prisma.UserWhereUniqueInput) => {
    // Get the user from the database
    const user = await prisma.user.findUnique({
      where,
    });
    return user;
  },
};

export default usersService;
