const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  moods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Moods",
    },
  ],
  KWH: { type: Number },
});
const Device = mongoose.model("Devices", DeviceSchema);

module.exports = Device;
