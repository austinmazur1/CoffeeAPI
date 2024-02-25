import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mazuraustin1:gDytBJKVd6Vrf2c8@cluster32.wvkdomp.mongodb.net/CoffeeAPI');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error);
    process.exit(1);
  }
};

export default connectDB;