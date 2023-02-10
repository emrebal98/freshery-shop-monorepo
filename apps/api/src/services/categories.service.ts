import { prisma, type Prisma } from 'database';
import type { CategoryData } from '../types/categories';

const categoriesService = {
  /**
   * Get all categories
   * @returns Categories
   */
  get: async () => {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return categories;
  },
  /**
   * Get one category by unique input
   * @param where Prisma.CategoryWhereUniqueInput
   * @returns Category
   */
  getOne: async (where: Prisma.CategoryWhereUniqueInput) => {
    const category = await prisma.category.findUnique({
      where,
    });
    return category;
  },
  /**
   * Create a category
   * @param categoryData Category data
   * @returns Category
   */
  create: async (categoryData: CategoryData) => {
    const category = await prisma.category.create({
      data: {
        name: categoryData.name,
        slug: categoryData.slug,
      },
    });
    return category;
  },
  /**
   * Update a category by id
   * @param id Category id
   * @param categoryData Category data
   * @returns Category
   */
  updateById: async (id: string, categoryData: Partial<CategoryData>) => {
    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name: categoryData.name,
        slug: categoryData.slug,
      },
    });
    return category;
  },
  /**
   * Delete a category by id
   * @param id Category id
   * @returns Category
   */
  deleteById: async (id: string) => {
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });
    return category;
  },
};
export default categoriesService;
