import express from 'express';
import { DoctorController } from './doctor.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';
import { ROLES } from '../../constants/roles';

const router = express.Router();

router.get('/', DoctorController.getAllDoctors);
router.get('/:id', DoctorController.getDoctorById);
router.patch(
  '/approve/:userId',
  authMiddleware,
  roleMiddleware([ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  DoctorController.approveDoctor
);
router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware([ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  DoctorController.deleteDoctorById
);
router.delete(
  '/delete-all',
  authMiddleware,
  roleMiddleware([ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  DoctorController.deleteAllDoctors
);

export const DoctorRoutes = router;
