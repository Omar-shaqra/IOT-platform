const mongoose = require("mongoose");

const senssortSchema = mongoose.Schema(
  {
    key: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Senseor",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
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
const Senssor = mongoose.model("Senssor", senssortSchema);

module.exports = Senssor;
