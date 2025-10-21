import { Router } from 'express';
import { PrescriptionController } from './prescription.controller';

const router = Router();

router.post('/', PrescriptionController.createPrescription);
router.get('/', PrescriptionController.getAllPrescriptions);
router.get('/:id', PrescriptionController.getPrescriptionById);
router.patch('/:id', PrescriptionController.updatePrescription);
router.delete('/:id', PrescriptionController.deletePrescription);

export const PrescriptionRoutes = router;
