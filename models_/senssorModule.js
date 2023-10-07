const mongoose = require("mongoose");

const senssortSchema = mongoose.Schema(
  {
    key: {
      type: String,
      unique: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Project",
    },
    jop_description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

senssortSchema.path("key").default(function () {
  return Math.random().toString(36).substring(7);
});

const Senssor = mongoose.model("Sensors", senssortSchema);

module.exports = Senssor;
