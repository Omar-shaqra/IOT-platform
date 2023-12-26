const Device = require("../models_/DeviceModel");

// Get all Devices
exports.getDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get single Device
exports.getDevice = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ message: "Devices not found" });
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new Device
exports.createDevice = async (req, res) => {
  const devices = new Location(req.body);
  try {
    const newDevice = await devices.save();
    res.status(201).json(newDevice);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Update Device
exports.updateDevice = async (req, res) => {
  try {
    const updatedDevices = await Device.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedDevices);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Delete Device
exports.deleteDevice = async (req, res) => {
  try {
    await Device.findByIdAndDelete(req.params.id);
    res.json({ message: "Device deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
