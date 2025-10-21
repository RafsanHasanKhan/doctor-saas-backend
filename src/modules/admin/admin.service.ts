import { Response } from 'express';
import { ROLES } from '../../constants/roles';
import catchAsync from '../../utils/catchAsync';
import { UserModel } from '../user/user.model';
import { DoctorModel } from '../doctor/doctor.model';
import config from '../../config';
import bcrypt from 'bcrypt';

export const AdminService = {
  createAdmin: async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    const existingUser = await UserModel.findOne({ email: data.email });
    if (existingUser) throw new Error('User with this email already exists');


    // Hash password
    const salt = await bcrypt.genSalt(config.bcrypt_salt_rounds);
    const hashedPassword = await bcrypt.hash(data.password!, salt);

    const newAdmin = await UserModel.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: ROLES.ADMIN,
      isActive: true,
    });

    return newAdmin;
  },
  promoteToAdmin: async (userId: string) => {
  const user = await UserModel.findById(userId);
  if (!user) throw new Error('User not found');

  // Update role
  user.role = ROLES.ADMIN;
  await user.save();

  

  return user;
},

  getAllAdmins: async () => {
    const admins = await UserModel.find({ role: ROLES.ADMIN });
    return admins;
  },
  deleteAdmin: async (adminId: string) => {
    const admin = await UserModel.findByIdAndDelete(adminId);
    if (!admin) throw new Error('Admin not found');
  },
};
