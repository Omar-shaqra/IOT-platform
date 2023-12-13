const Usermood = require("../models_/UserMoodModel");

// Get all moods
exports.getUserMoods = async (req, res) => {
  try {
    const moods = await Usermood.find();
    res.json(moods);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get single mood
exports.getUserMood = async (req, res) => {
  try {
    const mood = await Usermood.findById(req.params.id);
    if (!mood) return res.status(404).json({ message: "Mood not found" });
    res.json(mood);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new mood
exports.createUserMood = async (req, res) => {
  const mood = new Usermood(req.body);
  try {
    const newMood = await mood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Update mood
exports.updateUserMood = async (req, res) => {
  try {
    const updatedMood = await Usermood.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedMood);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Delete mood
exports.deleteUserMood = async (req, res) => {
  try {
    await Usermood.findByIdAndDelete(req.params.id);
    res.json({ message: "Mood deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
