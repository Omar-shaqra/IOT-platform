const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongo Connected:${con.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
