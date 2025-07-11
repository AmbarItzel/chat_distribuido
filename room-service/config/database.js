const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://admin:password@localhost:27017/room_database?authSource=admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected successfully - Room Service');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;