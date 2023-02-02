import express, { type Router } from 'express';
import authRoute from './auth.route';
import usersRoute from './users.route';

const router: Router = express.Router();

router.use('/users', usersRoute);
router.use('/auth', authRoute);

export default router;
