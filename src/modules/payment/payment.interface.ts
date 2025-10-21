import { Schema } from 'mongoose';

export type IPayment = {
  userId: Schema.Types.ObjectId;
  doctorId: Schema.Types.ObjectId;
  amount: number;
  status: 'pending' | 'paid' | 'failed';
  method?: 'cash' | 'card' | 'online';
};
