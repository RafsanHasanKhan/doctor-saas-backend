import { Schema, Types } from 'mongoose';

export type IPatient = {
  userId: Schema.Types.ObjectId; 
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  contact: string;
  address?: string;
  bloodGroup?: string;
  medicalHistory?: string;
  notes?: string;
  isActive?: boolean; 
};
