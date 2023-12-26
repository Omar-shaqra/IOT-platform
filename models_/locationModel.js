const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  devices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Devices",
    },
  ],
});
const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
