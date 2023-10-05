const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/users.js");
const sensors = require("./data/senssors.js");
const values = require("./data/values.js");
const projects = require("./data/projects.js");

const User = require("./models_/userModel");
const Sensor = require("./models_/senssorModule");
const Value = require("./models_/valuesModule");
const Project = require("./models_/projectModule");
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Sensor.deleteMany();
    await Value.deleteMany();
    await Project.deleteMany();

    const createUser = await User.insertMany(users);
    const UserID = createUser[0]._id;
    const sampleSenssors = sensors.map((Sensor) => {
      return { ...Sensor, user: UserID };
    });

    const createSensor = await Sensor.insertMany(sampleSenssors);
    const senssorID = createSensor[0]._id;
    const sampleValue = values.map((Value) => {
      return { ...Value, sensor: senssorID };
    });
    await Value.insertMany(sampleValue);

    const sampleProject = projects.map((Project) => {
      return {
        ...Project,
        owner: UserID,
        sensors: [senssorID],
        users: { userID: UserID, role: "role" },
      };
    });
    await Project.insertMany(sampleProject);

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
    await Value.deleteMany();
    await Sensor.deleteMany();
    await Project.deleteMany();

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
