import express, { type Router } from 'express';
import { userController } from '../controllers';

const router: Router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

export default router;
