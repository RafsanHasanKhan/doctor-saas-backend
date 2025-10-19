import { Types } from 'mongoose';
import { UserModel } from '../user/user.model';
import { DoctorModel } from './doctor.model';

export const DoctorService = {
  getAllDoctors: async () => {
    const doctors = await DoctorModel.find().populate('userId');
    return doctors;
  },

  getDoctorById: async (id: string) => {
    const doctor = await DoctorModel.findById(id)
      .populate('userId', 'name email role isActive')
      .exec();

    if (!doctor) {
      throw new Error('Doctor not found');
    }
    return doctor;
  },
  approveDoctor: async (userId: string) => {
    console.log(userId)
    const doctorUser = await UserModel.findById(new Types.ObjectId(userId));
  
    if (!doctorUser) throw new Error('Doctor not found');
    if (doctorUser.role !== 'doctor') throw new Error('User is not a doctor');

    doctorUser.isActive = true;
    await doctorUser.save();

    return doctorUser;
  } 
};
