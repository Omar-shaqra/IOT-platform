const mongoose = require("mongoose");

const usermoodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },

    moodID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Moods",
    },

    isFav: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserMood = mongoose.model("UserMood", usermoodSchema);

module.exports = UserMood;
