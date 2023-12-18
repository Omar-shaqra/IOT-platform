const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
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
});
const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
