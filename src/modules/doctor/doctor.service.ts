import { Types } from 'mongoose';
import { UserModel } from '../user/user.model';
import { DoctorModel } from './doctor.model';

export const DoctorService = {
  getAllDoctors: async () => {
    const doctors = await DoctorModel.find({}).populate({
      path: 'userId',
      match: { role: 'doctor' },
    });
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
    const doctorUser = await UserModel.findById(new Types.ObjectId(userId));

    if (!doctorUser) throw new Error('Doctor not found');
    if (doctorUser.role !== 'doctor') throw new Error('User is not a doctor');

    doctorUser.isActive = true;
    await doctorUser.save();

    return doctorUser;
  },

  deleteDoctorById: async (id: string) => {
    const doctor = await DoctorModel.findByIdAndDelete(id);
    if (!doctor) {
      throw new Error('Doctor not found');
    }
    return doctor;
  },

  deleteAllDoctors: async () => {
    const result = await DoctorModel.deleteMany({});
    return { deletedCount: result.deletedCount };
  },
};
