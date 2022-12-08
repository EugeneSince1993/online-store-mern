import express from 'express';
import { UserController } from '../controllers';
import { checkAuth, handleValidationErrors } from '../middleware';
import { validation } from '../middleware';

const router = express.Router();

router.post('/login', validation.login, handleValidationErrors, UserController.login);
router.post('/register', validation.register, handleValidationErrors, UserController.register);
router.get('/me', checkAuth, UserController.getMe);

export default router;