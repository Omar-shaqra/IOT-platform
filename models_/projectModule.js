const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    sensors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Senssor",
      },
    ],
    project_type: {
      type: String,
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User",
      },
      { role: "" },
    ],
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
