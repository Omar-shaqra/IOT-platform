const mongoose = require("mongoose");

const moodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    schedules: [
      {
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
      },
    ],
    isFav: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Moods = mongoose.model("Moods", moodSchema);

module.exports = Moods;
