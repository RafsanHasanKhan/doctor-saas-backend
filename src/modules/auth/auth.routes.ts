import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();

router.post('/register/doctor', AuthController.registerDoctor);
router.post('/register/user', AuthController.registerUser);
router.post('/login', AuthController.login);

export const AuthRoutes = router;
