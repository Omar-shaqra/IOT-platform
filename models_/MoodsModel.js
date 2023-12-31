const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["light", "music", "temperature"],
      required: true,
    },

    data: {
      type: Object,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    isFav: {
      type: Boolean,
      default: false,
    },
    schedules: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Schedule",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Light mood schema
moodSchema.virtual("lightSettings").get(function () {
  return this.data.lightSettings;
});

// Music mood schema
moodSchema.virtual("musicSettings").get(function () {
  return this.data.musicSettings;
});

// Temperature mood schema
moodSchema.virtual("temperatureSettings").get(function () {
  return this.data.temperatureSettings;
});

const Moods = mongoose.model("Moods", moodSchema);

module.exports = Moods;
