import { PrescriptionModel } from './prescription.model';
import { IPrescription } from './prescription.interface';

export const PrescriptionService = {
  createPrescription: async (payload: IPrescription) => {
    return await PrescriptionModel.create(payload);
  },

  getAllPrescriptions: async () => {
    return await PrescriptionModel.find().populate(
      'appointmentId',
      'doctorId userId date'
    );
  },

  getPrescriptionById: async (id: string) => {
    return await PrescriptionModel.findById(id).populate(
      'appointmentId',
      'doctorId userId date'
    );
  },

  updatePrescription: async (id: string, payload: Partial<IPrescription>) => {
    return await PrescriptionModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
  },

  deletePrescription: async (id: string) => {
    return await PrescriptionModel.findByIdAndDelete(id);
  },
};
