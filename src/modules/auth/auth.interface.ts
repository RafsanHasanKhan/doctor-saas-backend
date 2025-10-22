import { Schema } from 'mongoose';

export type IOTP = {
  userId: Schema.Types.ObjectId;
  otp: string;
  type: 'email' | '2fa';
  expiresAt: Date;
};
