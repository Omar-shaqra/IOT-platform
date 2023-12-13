const Moods = require("../models_/moodsModel");

// Get all moods
exports.getMoods = async (req, res) => {
  try {
    const moods = await Moods.find();
    res.json(moods);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get single mood
exports.getMood = async (req, res) => {
  try {
    const mood = await Moods.findById(req.params.id);
    if (!mood) return res.status(404).json({ message: "Mood not found" });
    res.json(mood);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new mood
exports.createMood = async (req, res) => {
  const mood = new Moods(req.body);
  try {
    const newMood = await mood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Update mood
exports.updateMood = async (req, res) => {
  try {
    const updatedMood = await Moods.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedMood);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Delete mood
exports.deleteMood = async (req, res) => {
  try {
    await Moods.findByIdAndDelete(req.params.id);
    res.json({ message: "Mood deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
