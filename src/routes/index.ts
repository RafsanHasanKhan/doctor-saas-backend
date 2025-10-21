import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { DoctorRoutes } from '../modules/doctor/doctor.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { UserRouters } from '../modules/user/user.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';
import { PatientRoutes } from '../modules/patient/patient.route';
import { PrescriptionRoutes } from '../modules/prescription/prescription.route';

const router = Router();

const moduleRoutes = [
  { path: '/auth', route: AuthRoutes },
  { path: '/doctor', route: DoctorRoutes },
  { path: '/user', route: UserRouters },
  { path: '/admin', route: AdminRoutes },
  { path: '/appointment', route: AppointmentRoutes },
  { path: '/patient', route: PatientRoutes },
  { path: '/prescription', route: PrescriptionRoutes },
];

moduleRoutes.forEach(r => router.use(r.path, r.route));

export default router;
