import express from 'express';
import { PatientController } from './patient.controller';

const router = express.Router();

router.post('/', PatientController.createPatient);
router.get('/', PatientController.getAllPatient);
router.get('/:id', PatientController.getPatientById);
router.patch('/:id', PatientController.updatePatientById);
router.delete('/:id', PatientController.deletePatientById);

export const PatientRoutes = router;