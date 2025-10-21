import { IPatient } from './patient.interface';
import { PatientModel } from './patient.model';

export const PatientService = {
  createPatient: async (payload: IPatient) => {
    const patient = await PatientModel.create(payload);
    return patient;
  },
  getAllPatient: async () => {
    const patient = await PatientModel.find();
    return patient;
  },
  getPatientById: async (id: string) => {
    const patient = await PatientModel.findById(id);
    return patient;
  },
  updatePatientById: async (id: string, payload: Partial<IPatient>) => {
    const patient = await PatientModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    return patient;
  },
  deletePatientById: async (id: string) => {
    const patient = await PatientModel.findByIdAndDelete(id);
    return patient;
  },
};
