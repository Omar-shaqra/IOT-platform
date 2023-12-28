const Room = require("../models_/RoomModel");

// Get all Rooms
exports.getRoooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Get single Room
exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Create new Room
exports.createRoom = async (req, res) => {
  const rooms = new Room(req.body);
  try {
    const newRoom = await rooms.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Update Room
exports.updateRoom = async (req, res) => {
  try {
    const updatedRooms = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedRooms);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Delete Room
exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: "Room deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
