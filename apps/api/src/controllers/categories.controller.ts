import type { Request } from 'express';
import { categoriesSchema } from '../schemas/categories.schema';
import { categoriesService } from '../services';
import type { CustomResponse } from '../types/auth';
import { handleError } from '../utils';

const categoriesController = {
  /**
   * Get all categories
   * @param req Request
   * @param res Response
   * @returns Categories
   */
  get: async (req: Request, res: CustomResponse) => {
    try {
      // Get all categories from the database
      const categories = await categoriesService.get();
      // Return the categories
      return res.status(200).json({
        message: 'Categories found.',
        data: categories,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
  /**
   * Get one category by slug
   * @param req Request
   * @param res Response
   * @returns Category
   */
  getBySlug: async (req: Request, res: CustomResponse) => {
    try {
      // Get the category slug from the request params
      const { slug } = req.params;
      // Get the category from the database
      const category = await categoriesService.getOne({ slug });
      // Check if the category exists
      if (!category)
        return res
          .status(404)
          .json({ error: 'NotFound', message: 'Category not found.' });
      // Return the category
      return res.status(200).json({
        message: 'Category found.',
        data: category,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
  /**
   * Create a category
   * @param req Request
   * @param res Response
   * @returns Category
   */
  create: async (req: Request, res: CustomResponse) => {
    try {
      // Check if the user is an admin
      const { role } = req.user;
      if (role !== 'ADMIN')
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to create a category.',
        });
      // Validate and get the category data from the request body
      const categoryData = categoriesSchema.parse(req.body);
      // Create the category in the database
      const category = await categoriesService.create(categoryData);
      // Return the category
      return res.status(201).json({
        message: 'Category created.',
        data: category,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
  /**
   * Update a category by id
   * @param req Request
   * @param res Response
   * @returns Category
   */
  updateById: async (req: Request, res: CustomResponse) => {
    try {
      // Check if the user is an admin
      const { role } = req.user;
      if (role !== 'ADMIN')
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to update a category.',
        });
      // Get the category id from the request params
      const { id } = req.params;
      // Validate and get the category data from the request body
      const categoryData = categoriesSchema.partial().parse(req.body);
      // Update the category in the database
      const category = await categoriesService.updateById(id, categoryData);
      // Return the category
      return res.status(200).json({
        message: 'Category updated.',
        data: category,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
  /**
   * Delete a category by id
   * @param req Request
   * @param res Response
   * @returns Category
   */
  deleteById: async (req: Request, res: CustomResponse) => {
    try {
      // Check if the user is an admin
      const { role } = req.user;
      if (role !== 'ADMIN')
        return res.status(403).json({
          error: 'Forbidden',
          message: 'You are not allowed to delete a category.',
        });
      // Get the category id from the request params
      const { id } = req.params;
      // Delete the category in the database
      const category = await categoriesService.deleteById(id);
      // Return the category
      return res.status(200).json({
        message: 'Category deleted.',
        data: category,
      });
    } catch (error) {
      req.log.error(error);
      return handleError(error, res);
    }
  },
};
export default categoriesController;
