import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { DoctorRoutes } from '../modules/doctor/doctor.route';

const router = Router();

const moduleRoutes = [
  { path: '/auth', route: AuthRoutes },
  { path: '/doctor', route: DoctorRoutes },
];

moduleRoutes.forEach(r => router.use(r.path, r.route));

export default router;
