import express, { type Router } from 'express';
import { productsController } from '../controllers';
import { authenticate, checkUser } from '../middlewares';

const router: Router = express.Router();

router.get('/', productsController.get);
router.get('/:slug', productsController.getBySlug);
router.post('/', authenticate, checkUser, productsController.create);
router.patch('/:id', authenticate, checkUser, productsController.updateById);
router.delete('/:id', authenticate, checkUser, productsController.deleteById);

export default router;
