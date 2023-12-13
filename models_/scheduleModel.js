const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
  },
  events: [
    {
      type: String,
    },
  ],
  repeat: {
    type: String,
    enum: ["daily", "weekly", "monthly"],
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
