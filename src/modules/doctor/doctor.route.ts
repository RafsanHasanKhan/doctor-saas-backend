import express from 'express';
import { DoctorController } from './doctor.controller';
const router = express.Router();

router.get('/', DoctorController.getAllDoctors);
router.get('/:id', DoctorController.getDoctorById);
router.patch('/approve/:userId', DoctorController.approveDoctor);
router.delete('/:id', DoctorController.deleteDoctorById);
router.delete('/delete-all', DoctorController.deleteAllDoctors);

export const DoctorRoutes = router;
