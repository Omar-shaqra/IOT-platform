const Location = require("../models_/locationModel");

// Get all Location
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get single Location
exports.getLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location)
      return res.status(404).json({ message: "Locations not found" });
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new Location
exports.createLocation = async (req, res) => {
  const locations = new Location(req.body);
  try {
    const newlocation = await locations.save();
    res.status(201).json(newlocation);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Update Location
exports.updateLocation = async (req, res) => {
  try {
    const updatedlocations = await Location.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedlocations);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Delete Location
exports.deleteLocation = async (req, res) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.json({ message: "Location deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
