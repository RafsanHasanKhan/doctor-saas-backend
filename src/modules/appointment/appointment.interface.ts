import { Schema, Types } from "mongoose";

export type IAppointment = {
  doctorId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  data: Date;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}