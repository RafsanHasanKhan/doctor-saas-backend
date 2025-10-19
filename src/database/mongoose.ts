import mongoose from 'mongoose';
import config from '../config';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string);
  } catch (error) {
    console.error('DB connection error:', error);
    process.exit(1);
  }
};
