const Device = require("../models_/UserMoodModel");

// Get all moods
exports.getDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get single mood
exports.getDevice = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ message: "Device not found" });
    res.json(mood);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new mood
exports.createDevice = async (req, res) => {
  const device = new Device(req.body);
  try {
    const newDevice = await Device.save();
    res.status(201).json(newDevice);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Update mood
exports.updateDevice = async (req, res) => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedDevice);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Delete mood
exports.deleteDevice = async (req, res) => {
  try {
    await Device.findByIdAndDelete(req.params.id);
    res.json({ message: "Device deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
