import mongoose, { Schema } from 'mongoose';
import { ISuperAdmin } from './superAdmin.interface';

const superAdminSchema = new Schema<ISuperAdmin>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  isActive: { type: Boolean, default: true },
});

export const SuperAdminModel = mongoose.model<ISuperAdmin>('SuperAdmin', superAdminSchema);
