import { model, Schema, Types } from 'mongoose';
import { IAppointment } from './appointment.interface';

const appointmentSchema = new Schema<IAppointment>({
  doctorId: { type: Types.ObjectId, ref: 'Doctor', required: true },
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  data: { type: Date, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  notes: { type: String },
}, {
  timestamps: true
});

export const AppointModel = model<IAppointment>(
  'Appointment',
  appointmentSchema
);
