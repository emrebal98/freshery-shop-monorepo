import express, { type Router } from 'express';
import { authRoute, productsRoute, usersRoute } from '..';

const router: Router = express.Router();

router.use('/users', usersRoute);
router.use('/auth', authRoute);
router.use('/products', productsRoute);

export default router;
