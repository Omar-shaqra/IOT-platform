const Status = require("../models_/statusModule");
const asyncHandler = require("express-async-handler");

const addStatus = async (req, res) => {
  try {
    const { sensorID, userID, status_type, users } = req.body;

    const status = await new Status({
      sensorID,
      userID,
      status_type,
      users,
    }).save();

    res.status(201).json(status);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllStatus = asyncHandler(async (req, res) => {
  const status = await Status.find({});
  res.json(status);
});

const getStatusByID = asyncHandler(async (req, res) => {
  const status = await Status.findById(req.params.id);
  if (status) {
    res.json(status);
  } else {
    res.status(404);
    throw new Error("Status not found");
  }
});

const updateStatusyId = asyncHandler(async (req, res) => {
  const status = await Status.findById(req.params.id);
  if (status) {
    status.status_type = req.body.status_type;
    const updateStatus = await status.save();
    res.json(updateStatus);
  } else {
    res.status("404");
    throw new Error("Status Not Found");
  }
});

const DeleteStatusByID = asyncHandler(async (req, res) => {
  const status = await Status.findByIdAndDelete(req.params.id);
  if (status) {
    res.status(200).json({ message: " deleted successfully" });
  } else {
    res.status(500);
    throw new Error("Status not found");
  }
});

module.exports = {
  addStatus,
  getAllStatus,
  getStatusByID,
  updateStatusyId,
  DeleteStatusByID,
};
