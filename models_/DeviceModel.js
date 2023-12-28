const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    Room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rooms",
    },
    image: {
      type: String,
    },
    schedules: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Schedule",
      },
    ],
    moods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Moods",
      },
    ],
    KWH: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Device = mongoose.model("Devices", DeviceSchema);

module.exports = Device;
