import mongoose from 'mongoose';

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
      throw new Error('Error: MONGO_URI is not defined in your environment variables.');
  }
  // Let mongoose.connect throw its own detailed error on failure
  const conn = await mongoose.connect(MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};
