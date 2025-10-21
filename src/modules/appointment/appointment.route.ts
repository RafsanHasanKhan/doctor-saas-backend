import express from 'express';
import { AppointmentController } from './appointment.controller';

const router = express.Router();

router.post('/', AppointmentController.createAppointment);
router.get('/', AppointmentController.getAllAppointment);
router.get('/:id', AppointmentController.getAppointmentById);
router.patch('/:id', AppointmentController.updateAppointment);
router.delete('/:id', AppointmentController.deleteAppointment);

export const AppointmentRoutes = router;