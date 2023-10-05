const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    sensors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Sensor",
      },
    ],
    project_type: {
      type: String,
      required: true,
    },
    users: [
      {
<<<<<<< HEAD
        userid: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "User",
        },
        role: {
          type: String,
=======
        userID: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Users",
        },
        role: {
          type: String,
          required: true,
>>>>>>> d2d02e3938a76513558f05c91b78505f43f7ef8b
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
