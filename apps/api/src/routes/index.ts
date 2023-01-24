import express, { type Router } from 'express';
import userRoutes from './user.routes';

const router: Router = express.Router();

router.use('/users', userRoutes);

export default router;
