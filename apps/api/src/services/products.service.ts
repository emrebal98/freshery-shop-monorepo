import { prisma, type Prisma } from 'database';
import type { ProductData } from '../types/products';

const productsService = {
  /**
   * Get all products
   * @param where Prisma.ProductWhereInput (optional)
   * @returns Products
   */
  get: async (where?: Prisma.ProductWhereInput) => {
    // Get all products from the database
    const products = await prisma.product.findMany({
      where,
      include: {
        images: {
          select: { id: true, sort: true, name: true },
          orderBy: {
            sort: 'asc',
          },
        },
      },
    });
    return products;
  },
  /**
   * Get one product by unique input
   * @param where Prisma.ProductWhereUniqueInput
   * @returns Product
   */
  getOne: async (where: Prisma.ProductWhereUniqueInput) => {
    // Get the product from the database
    const product = await prisma.product.findUnique({
      where,
      include: {
        images: {
          select: { id: true, sort: true, name: true },
          orderBy: {
            sort: 'asc',
          },
        },
      },
    });
    return product;
  },
  /**
   * Create a product
   * @param productData Product data
   * @param userID User id
   * @returns Product
   */
  create: async (productData: ProductData, userID: string) => {
    // Create the product in the database
    const product = await prisma.product.create({
      data: {
        name: productData.name,
        slug: productData.slug,
        description: productData.description,
        shortDescription: productData.shortDescription,
        price: productData.price,
        stock: productData.stock,
        images: {
          create: productData.images,
        },
        category: {
          connect: {
            id: productData.categoryId,
          },
        },
        owner: {
          connect: {
            id: userID,
          },
        },
      },
      include: {
        images: {
          select: { id: true, sort: true, name: true },
          orderBy: {
            sort: 'asc',
          },
        },
      },
    });
    return product;
  },
  /**
   * Update a product by id
   * @param id Product id
   * @param productData Product data
   * @param userID User id
   * @returns Product
   */
  updateById: async (
    id: string,
    productData: Partial<ProductData>,
    userID: string
  ) => {
    // Update the images of the product
    if (productData.images) {
      // Delete the images of the product
      await prisma.image.deleteMany({
        where: {
          productId: id,
        },
      });
      // Create the images of the product
      await prisma.image.createMany({
        data: productData.images.map((image) => ({
          ...image,
          productId: id,
        })),
      });
    }
    // Update the product in the database
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name: productData.name,
        slug: productData.slug,
        description: productData.description,
        shortDescription: productData.shortDescription,
        price: productData.price,
        stock: productData.stock,
        owner: {
          connect: {
            id: userID,
          },
        },
      },
      include: {
        images: {
          select: { id: true, sort: true, name: true },
          orderBy: {
            sort: 'asc',
          },
        },
      },
    });
    return product;
  },
  /**
   * Delete a product by id
   * @param id Product id
   * @returns Product
   */
  deleteById: async (id: string) => {
    // Delete the images of the product
    await prisma.image.deleteMany({
      where: {
        productId: id,
      },
    });
    // Delete the product in the database
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });
    return product;
  },
};

export default productsService;
