import config from '../../config';
import { hashPassword } from '../../utils/hashPassword';
import { DoctorModel } from '../doctor/doctor.model';
import { PatientModel } from '../patient/patient.model';
import { UserModel } from '../user/user.model';
import mongoose from 'mongoose';

export const AuthService = {
  // ================= Patient Registration =================
  registerPatient: async (data: {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    contact: string;
    address?: string;
  }) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const { name, email, password, age, gender, contact, address } = data;

      // Check existing user within session
      const existingUser = await UserModel.findOne({ email }).session(session);
      if (existingUser) throw new Error('User already exists');

      // Password validation
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      if (!passwordRegex.test(password)) throw new Error('Password too weak');

      const hashedPassword = await hashPassword(password);
      // Create User
      const user = await UserModel.create(
        [
          {
            name,
            email,
            password: hashedPassword,
            role: 'patient',
            isActive: true,
          },
        ],
        { session }
      );
      const userId = user[0]._id;

      // Create Patient
      const patient = await PatientModel.create(
        [
          {
            userId,
            name,
            age,
            gender,
            contact,
            address,
            isActive: true,
          },
        ],
        { session }
      );

      await session.commitTransaction();
      session.endSession();

      return {
        message: 'Patient registered successfully',
        userId,
        patientId: patient[0]._id,
      };
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      throw err;
    }
  },

  // ================= Doctor Registration =================
  registerDoctor: async (data: {
    name: string;
    email: string;
    password: string;
    specialization: string;
    experience: number;
    fees: number;
    chamberLocation: string;
  }) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const {
        name,
        email,
        password,
        specialization,
        experience,
        fees,
        chamberLocation,
      } = data;

      // Check existing user within session
      const existingUser = await UserModel.findOne({ email }).session(session);
      if (existingUser) throw new Error('Doctor already exists');

      // Password validation
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      if (!passwordRegex.test(password)) throw new Error('Password too weak');

      const hashedPassword = await hashPassword(password);

      // Create User
      const user = await UserModel.create(
        [
          {
            name,
            email,
            password: hashedPassword,
            role: 'doctor',
            isActive: false,
          },
        ],
        { session }
      );
      const userId = user[0]._id;

      // Create Doctor
      const doctor = await DoctorModel.create(
        [
          {
            userId,
            specialization,
            experience,
            fees,
            chamberLocation,
          },
        ],
        { session }
      );

      await session.commitTransaction();
      session.endSession();

      return {
        message: 'Doctor registered: pending admin approval',
        userId,
        doctorId: doctor[0]._id,
      };
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      throw err;
    }
  },
};
