import express, { type Router } from 'express';
import { categoriesController } from '../controllers';
import { authenticate, checkUser } from '../middlewares';

const router: Router = express.Router();

router.get('/', categoriesController.get);
router.get('/:slug', categoriesController.getBySlug);
router.post('/', authenticate, checkUser, categoriesController.create);
router.patch('/:id', authenticate, checkUser, categoriesController.updateById);
router.delete('/:id', authenticate, checkUser, categoriesController.deleteById);

export default router;
