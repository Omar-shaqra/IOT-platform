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
        userID: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Users",
        },
        role: {
          type: String,
          required: true,
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
