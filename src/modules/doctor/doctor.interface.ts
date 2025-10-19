import { Schema } from "mongoose"

export type IDoctor = {
  userId: Schema.Types.ObjectId;
  specialization: string;
  experience: number;
  fees: number;
  chamberLocation: string;
}