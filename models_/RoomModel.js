const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    image: {
      type: String,
      required: true,
    },
    devices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Devices",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Room = mongoose.model("Rooms", RoomSchema);

module.exports = Room;
