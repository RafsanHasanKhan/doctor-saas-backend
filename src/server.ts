import app from './app';
import config from './config';
import { connectDB } from './database/mongoose';

const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to start server:', error);
  }
};

startServer();
