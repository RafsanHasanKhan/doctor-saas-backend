import config from '../../config';
import { IDoctor } from '../doctor/doctor.interface';
import { DoctorModel } from '../doctor/doctor.model';
import { SuperAdminModel } from '../superAdmin/superAdmin.model';
import { IUser } from '../user/user.interface';
import { UserModel } from '../user/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const AuthService = {
  registerDoctor: async (data: Partial<IUser> & Partial<IDoctor>) => {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email: data.email });
    if (existingUser) throw new Error('Doctor already exists');

    // Hash password
    const salt = await bcrypt.genSalt(config.bcrypt_salt_rounds);
    const hashedPassword = await bcrypt.hash(data.password!, salt);

    // Create user with role doctor and isActive false
    const user = await UserModel.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: 'doctor',
      isActive: false,
    });

    // Create doctor profile
    const doctor = await DoctorModel.create({
      userId: user._id,
      specialization: data.specialization,
      experience: data.experience,
      fees: data.fees,
      chamberLocation: data.chamberLocation,
    });

    // Remove password from response
    const { password, ...userData } = user.toObject();

    // JWT token with id, role, email, name
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email,
        name: user.name,
      },
      config.jwt.secret,
      { expiresIn: config.jwt.expires_in }
    );

    return { user: userData, doctor, accessToken: token };
  },

  registerUser: async (data: Partial<IUser>) => {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email: data.email });
    if (existingUser) throw new Error('User already exists');

    // Hash password
    const salt = await bcrypt.genSalt(config.bcrypt_salt_rounds);
    const hashedPassword = await bcrypt.hash(data.password!, salt);

    // Create user with role 'user' and isActive true
    const newUser = await UserModel.create({
      ...data,
      password: hashedPassword,
      role: 'user',
      isActive: true,
    });

    // Remove password from response
    const { password, ...userData } = newUser.toObject();

    // JWT token with id, role, email, name
    const token = jwt.sign(
      {
        id: newUser._id,
        role: newUser.role,
        email: newUser.email,
        name: newUser.name,
      },
      config.jwt.secret,
      { expiresIn: config.jwt.expires_in }
    );

    return { user: userData, accessToken: token };
  },

  login: async (email: string, password: string) => {
    let user = await UserModel.findOne({ email }).select('+password');
    let isSuperAdmin = false;

    if (!user) {
      user = await SuperAdminModel.findOne({ email }).select('+password');
      isSuperAdmin = !!user;
    }

    if (!user) throw new Error('User not found');

    // Check if doctor is approved
    if (user.role === 'doctor' && !user.isActive)
      throw new Error('Doctor is not approved yet');

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    // JWT token with id, role, email, name
    const token = jwt.sign(
      {
        id: user._id,
        role: isSuperAdmin ? 'super-admin' : user.role,
        email: user.email,
        name: user.name,
      },
      config.jwt.secret,
      { expiresIn: config.jwt.expires_in }
    );

    // Remove password from response
    const { password: pwd, ...userData } = user.toObject();

    return { user: userData, accessToken: token };
  },
};
