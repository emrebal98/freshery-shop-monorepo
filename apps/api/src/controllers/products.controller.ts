import { prisma, Prisma } from 'database';
import type { Request } from 'express';
import { z } from 'zod';
import { productSchema } from '../schemas/products.schema';
import type { CustomResponse } from '../types/auth';
import { getValidationMessage } from '../utils';

const productsController = {
  /**
   * Get all products
   * @param req Request
   * @param res Response
   * @returns Response
   */
  getAll: async (req: Request, res: CustomResponse) => {
    try {
      // Get all products from the database
      const products = await prisma.product.findMany({
        include: {
          images: {
            select: { id: true, sort: true, name: true },
            orderBy: {
              sort: 'asc',
            },
          },
        },
      });
      // Return the products
      return res.status(200).json({
        message: 'Products found.',
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        error: 'InternalServerError',
        message: 'Something went wrong.',
      });
    }
  },
  /**
   * Get one product by slug
   * @param req Request
   * @param res Response
   * @returns Response
   */
  getBySlug: async (req: Request, res: CustomResponse) => {
    try {
      // Get the product slug from the request params
      const { slug } = req.params;
      // Get the product from the database
      const product = await prisma.product.findUnique({
        where: {
          slug,
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
      // Check if the product exists
      if (!product)
        return res
          .status(404)
          .json({ error: 'NotFound', message: 'Product not found.' });
      // Return the product
      return res.status(200).json({
        message: 'Product found.',
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        error: 'InternalServerError',
        message: 'Something went wrong.',
      });
    }
  },
  /**
   * Create a product
   * @param req Request
   * @param res Response
   * @returns Response
   */
  create: async (req: Request, res: CustomResponse) => {
    try {
      // Check if the user is a seller
      const { id, role } = req.user;
      if (role !== 'SELLER')
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to create products.',
        });
      // Validate and get the product data from the request body
      const productData = productSchema.parse(req.body);
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
          owner: {
            connect: {
              id,
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
      // Return the product
      return res.status(201).json({
        message: 'Product created.',
        data: product,
      });
    } catch (error) {
      req.log.error(error);
      // Check if the error is a validation error
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation',
          message: 'Validation error.',
          data: getValidationMessage(error),
        });
      }
      // Check if the error is a database error
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json({
          error: 'Database',
          message: 'Database error.',
        });
      }
      // Return the internal server error
      return res.status(500).json({
        error: 'InternalServerError',
        message: 'Something went wrong.',
      });
    }
  },
  /**
   * Update a product by id
   * @param req Request
   * @param res Response
   * @returns Response
   */
  updateById: async (req: Request, res: CustomResponse) => {
    try {
      // Check if the user is a seller
      const { id: userID, role } = req.user;
      if (role !== 'SELLER')
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to update products.',
        });
      // Chech if the user is the owner of the product
      const checkOwnerProduct = await prisma.product.findUnique({
        where: {
          id: req.params.id,
        },
        select: {
          ownerId: true,
        },
      });
      if (!checkOwnerProduct)
        return res
          .status(404)
          .json({ error: 'NotFound', message: 'Product not found.' });
      if (checkOwnerProduct.ownerId !== userID)
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to update this product.',
        });
      // Get the product slug from the request params
      const { id } = req.params;
      // Validate and get the product data from the request body
      const productData = productSchema.partial().parse(req.body);
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
      // Return the product
      return res.status(200).json({
        message: 'Product updated.',
        data: product,
      });
    } catch (error) {
      req.log.error(error);
      // Check if the error is a validation error
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation',
          message: 'Validation error.',
          data: getValidationMessage(error),
        });
      }
      // Check if the error is a database error
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json({
          error: 'Database',
          message: 'Database error.',
        });
      }
      // Return the internal server error
      return res.status(500).json({
        error: 'InternalServerError',
        message: 'Something went wrong.',
        data: error,
      });
    }
  },
  /**
   * Delete a product by id
   * @param req Request
   * @param res Response
   * @returns Response
   */
  deleteById: async (req: Request, res: CustomResponse) => {
    try {
      // Check if the user is a seller
      const { id: userID, role } = req.user;
      if (role !== 'SELLER')
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to delete products.',
        });
      // Chech if the user is the owner of the product
      const checkOwnerProduct = await prisma.product.findUnique({
        where: {
          id: req.params.id,
        },
        select: {
          ownerId: true,
        },
      });
      if (!checkOwnerProduct)
        return res
          .status(404)
          .json({ error: 'NotFound', message: 'Product not found.' });
      if (checkOwnerProduct.ownerId !== userID)
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to delete this product.',
        });
      // Delete the images of the product
      await prisma.image.deleteMany({
        where: {
          productId: req.params.id,
        },
      });
      // Delete the product in the database
      await prisma.product.delete({
        where: {
          id: req.params.id,
        },
      });
      // Return the product
      return res.status(200).json({
        message: 'Product deleted.',
      });
    } catch (error) {
      req.log.error(error);
      // Check if the error is a database error
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json({
          error: 'Database',
          message: 'Database error.',
        });
      }
      // Return the internal server error
      return res.status(500).json({
        error: 'InternalServerError',
        message: 'Something went wrong.',
      });
    }
  },
};

export default productsController;
