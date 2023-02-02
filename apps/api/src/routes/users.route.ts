import express, { type Router } from 'express';
import { usersController } from '../controllers';
import authenticate from '../middlewares/auth.middleware';

const router: Router = express.Router();

router.get('/me', authenticate, usersController.getMe);

export default router;
