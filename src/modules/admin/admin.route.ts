import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

router.post('/create', AdminController.createAdmin);
router.get('/', AdminController.getAllAdmins);
router.patch('/promote/:id', AdminController.promoteToAdmin);
router.delete('/:id', AdminController.deleteAdmin);

export const AdminRoutes = router;