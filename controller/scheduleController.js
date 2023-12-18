const Schedule = require("../models_/scheduleModel");

// Get all Schedule
exports.getSchedule = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get single Schedule
exports.getSchedules = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule)
      return res.status(404).json({ message: "Schedule not found" });
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new Schedule
exports.createSchedule = async (req, res) => {
  const schedule = new Schedule(req.body);
  try {
    const newschedule = await schedule.save();
    res.status(201).json(newschedule);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Update Schedule
exports.updateSchedule = async (req, res) => {
  try {
    const updatedschedules = await Schedule.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedschedules);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Delete Schedule
exports.deleteSchedule = async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: "Schedule deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
