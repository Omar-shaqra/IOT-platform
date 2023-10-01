const mongoose = require("mongoose");

const valueSchema = mongoose.Schema(
  {
    senssor: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Senssor",
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
const Value = mongoose.model("Value", valueSchema);

module.exports = Value;
