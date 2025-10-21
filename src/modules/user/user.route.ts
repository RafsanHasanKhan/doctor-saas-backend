import express from 'express';
import { UserController } from './user.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { ROLES } from '../../constants/roles';
import { roleMiddleware } from '../../middlewares/role.middleware';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.delete('/:id', authMiddleware,
  roleMiddleware([ROLES.ADMIN, ROLES.SUPER_ADMIN]), UserController.deleteUserById);

export const UserRouters = router;
