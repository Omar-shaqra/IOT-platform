const mongoose = require("mongoose");

const valueSchema = mongoose.Schema(
  {
    sensor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Sensors",
    },
    topic: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Value = mongoose.model("Values", valueSchema);

module.exports = Value;
