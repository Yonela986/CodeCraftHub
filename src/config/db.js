const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Hardcode your MongoDB URI directly
    const mongoUri = 'mongodb://root:8rUF6ElOqPThkjTtBuDXZSUp@172.21.206.133:27017/usermngtservice?authSource=admin';

    await mongoose.connect(mongoUri);

    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
