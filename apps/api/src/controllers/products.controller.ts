import type { Request } from 'express';
import { productSchema } from '../schemas/products.schema';
import { productsService } from '../services';
import type { CustomResponse } from '../types/auth';
import { handleError } from '../utils';

const productsController = {
  /**
   * Get all products
   * @param req Request
   * @param res Response
   * @returns Response
   */
  get: async (req: Request, res: CustomResponse) => {
    try {
      // Get all products from the database
      const products = await productsService.get();
      // Return the products
      return res.status(200).json({
        message: 'Products found.',
        data: products,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
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
      const product = await productsService.getOne({ slug });
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
      req.log.error(error);
      return handleError(error, res);
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
      const { id: userID, role } = req.user;
      if (role !== 'SELLER')
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to create products.',
        });
      // Validate and get the product data from the request body
      const productData = productSchema.parse(req.body);
      // Create the product in the database
      const product = await productsService.create(productData, userID);
      // Return the product
      return res.status(201).json({
        message: 'Product created.',
        data: product,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
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
      const checkOwnerProduct = await productsService.getOne({
        id: req.params.id,
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
      // Update the product in the database
      const product = await productsService.updateById(id, productData, userID);
      // Return the product
      return res.status(200).json({
        message: 'Product updated.',
        data: product,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
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
      const checkOwnerProduct = await productsService.getOne({
        id: req.params.id,
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
      // Delete the product from the database
      const product = await productsService.deleteById(req.params.id);
      // Return the product
      return res.status(200).json({
        message: 'Product deleted.',
        data: product,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
  /**
   * Get all products by category
   * @param req Request
   * @param res Response
   * @returns Response
   */
  getAllByCategorySlug: async (req: Request, res: CustomResponse) => {
    try {
      // Get the category slug from the request params
      const { slug } = req.params;
      // Get all products from the database by category
      const products = await productsService.get({ category: { slug } });
      // Return the products
      return res.status(200).json({
        message: 'Products found.',
        data: products,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
};

export default productsController;
