import express, { type Router } from 'express';
import { authController } from '../controllers';

const router: Router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);

export default router;
