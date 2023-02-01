require('dotenv').config();
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB is Connected...');
  } catch (err: any) {
    console.error(`MongoDB: ${err.message}`);
    process.exit(1);
  }
};
