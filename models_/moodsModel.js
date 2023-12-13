const mongoose = require("mongoose");

const moodsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Moods = mongoose.model("Moods", moodsSchema);

module.exports = Moods;
