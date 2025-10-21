import { model, Schema } from 'mongoose';
import { IDoctor } from './doctor.interface';

const doctorSchema = new Schema<IDoctor>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  fees: { type: Number, required: true },
  chamberLocation: { type: String, required: true },
});

export const DoctorModel = model<IDoctor>('Doctor', doctorSchema);
