import { model, Schema } from 'mongoose';
import { IPatient } from './patient.interface';

const patientSchema = new Schema<IPatient>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: true,
    },
    contact: { type: String, require: true },
    address: { type: String, required: true },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

export const PatientModel = model<IPatient>('Patient', patientSchema);
