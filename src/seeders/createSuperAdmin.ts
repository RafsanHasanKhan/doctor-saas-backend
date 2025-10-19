import mongoose from 'mongoose';
import config from '../config';
import { connectDB } from '../database/mongoose';
import bcrypt from 'bcrypt';
import { SuperAdminModel } from '../modules/superAdmin/superAdmin.model';

const createSuperAdmin = async () => {
  try {
    await connectDB();

    const email = config.super_admin_email;
    const existing = await SuperAdminModel.findOne({ email });

    if (existing) {
      console.log('Super admin already exists', email);
      mongoose.disconnect();
      return;
    }

    const hashedPassword = await bcrypt.hash(config.super_admin_password!, 10);

    const superAdmin = new SuperAdminModel({
      name: config.super_admin_name,
      email: config.super_admin_email,
      password: hashedPassword,
      role: 'super_admin',
      isActive: true,
    });

     await superAdmin.save();
    console.log('Super Admin created:', email);
     await superAdmin.save();
     console.log('Super Admin created:', email);
  } catch (error) {
     console.error('Error creating Super Admin:', error);
    mongoose.disconnect();
  }
};

createSuperAdmin();
