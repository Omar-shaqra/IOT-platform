const mongoose = require("mongoose");

const senssortSchema = mongoose.Schema(
  {
    key: {
      type: String,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    jop_description: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

senssortSchema.path("key").default(function () {
  return Math.random().toString(36).substring(7);
});

const Sensor = mongoose.model("Sensors", senssortSchema);

module.exports = Sensor;
