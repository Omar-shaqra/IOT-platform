const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/users.js");
const User = require("./models_/userModel");
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await console.log("Data Destroied!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
