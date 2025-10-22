import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();

router.post('/register/patient', AuthController.registerPatient);
router.post('/register/doctor', AuthController.registerPatient);

export const AuthRoutes = router;
