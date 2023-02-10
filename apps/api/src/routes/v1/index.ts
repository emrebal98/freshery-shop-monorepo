import express, { type Router } from 'express';
import { authRoute, categoriesRoute, productsRoute, usersRoute } from '..';

const router: Router = express.Router();

router.use('/users', usersRoute);
router.use('/auth', authRoute);
router.use('/products', productsRoute);
router.use('/categories', categoriesRoute);

export default router;
