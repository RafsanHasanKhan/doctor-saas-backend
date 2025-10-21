import { Schema } from 'mongoose';

export type IPrescription = {
  appointmentId: Schema.Types.ObjectId;
  medicines: string[];
  notes?: string;
};
