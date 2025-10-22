// import { model, Schema, Types } from "mongoose";
// import { IOTP } from "./auth.interface";

// const otpSchema = new Schema<IOTP>({
//   userId: { type: Types.ObjectId, ref: 'User', required: true },
//   otp: { type: String, required: true },
//   type: { type: String, enum: ['email', '2fa'], required: true },
//   expiresAt: { type: Date, required: true },
// }, {
//   timestamps: true
// });

// export const OTPModel = model<IOTP>('OTP', otpSchema);

