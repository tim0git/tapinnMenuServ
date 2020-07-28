const mongoose = require('mongoose');
// require in mongoose to set up the db connection
const config = require('config');
// require in config to access the default.json URI file
const db = config.get('mongoURI');
// get mongoURI from default.json

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected Development Cloud');
  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDB;
