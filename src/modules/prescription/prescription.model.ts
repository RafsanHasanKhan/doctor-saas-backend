import { model, Schema } from 'mongoose';
import { IPrescription } from './prescription.interface';

const prescriptionSchema = new Schema<IPrescription>(
  {
    appointmentId: {
      type: Schema.Types.ObjectId,
      ref: 'Appointment',
      required: true,
    },
    medicines: { type: [String], required: true },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

export const PrescriptionModel = model<IPrescription>(
  'Prescription',
  prescriptionSchema
);
