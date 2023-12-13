const Schedule = require("../models_/scheduleModel");

// Get all moods
exports.getSchedules = async (req, res) => {
  try {
    const schedule = await Schedule.find();
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get single mood
exports.getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule)
      return res.status(404).json({ message: "Schedule not found" });
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new mood
exports.createSchedule = async (req, res) => {
  const schedule = new Schedule(req.body);
  try {
    const newschedule = await schedule.save();
    res.status(201).json(newschedule);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Update mood
exports.updateSchedule = async (req, res) => {
  try {
    const updatedschedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedschedule);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Delete mood
exports.deleteSchedule = async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: "Schedule deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
