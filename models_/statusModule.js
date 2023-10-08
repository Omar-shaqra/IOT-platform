const mongoose = require("mongoose");

const statustSchema = mongoose.Schema(
  {
    sensorID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Sensors",
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    status_type: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Status = mongoose.model("Status", statustSchema);

module.exports = Status;
