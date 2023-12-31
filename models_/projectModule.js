const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    sensors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sensor",
      },
    ],
    project_type: {
      type: String,
      required: true,
    },
    users: [
      {
        userID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
        },
        userName: {
          type: String,
        },
        role: {
          type: String,
          default: "user",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
