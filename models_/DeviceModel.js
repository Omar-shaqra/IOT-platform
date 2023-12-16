const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    scheduleID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule",
    },
    MoodID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Moods",
    },
  },
  {
    timestamps: true,
  }
);

const Device = mongoose.model("Devices", deviceSchema);

module.exports = Device;
