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
        userid: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "User",
        },
        role: {
          type: String,
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
