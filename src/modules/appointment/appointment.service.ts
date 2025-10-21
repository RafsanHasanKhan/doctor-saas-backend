import { IAppointment } from './appointment.interface';
import { AppointModel } from './appointment.model';

export const AppointmentService = {
  createAppointment: async (payload: IAppointment) => {
    return await AppointModel.create(payload);
  },
  getAllAppointments: async () => {
    return await AppointModel.find().populate('doctorId').populate('userId');
  },
  getAppointmentById: async (id: string) => {
    return await AppointModel.findById(id).populate('doctorId').populate('userId');
  },
  updateAppointment: async (id: string, payload: Partial<IAppointment>) => {
    return await AppointModel.findByIdAndUpdate(id, payload, { new: true });
  },
  deleteAppointment: async (id: string) => {
    return await AppointModel.findByIdAndDelete(id);
  }
};
