const Value = require("../models_/valuesModule");
const Sensor = require("../models_/senssorModule");
const asyncHandler = require("express-async-handler");

const createValue = asyncHandler(async (sensor_key, topic, value) => {
  const value_ = await Value.create({
    sensor: sensor_key,
    topic: topic,
    value: value,
  });
  console.log(value_);
});

const getValueOFSenssor = asyncHandler(async (req, res) => {
  const sensorId = req.params.id;
  const sensor = await Sensor.findById(sensorId);
  if (!sensor) {
    res.status(404);
    throw new Error("Value not found");
  } else {
    const values = await Value.find({ sensor: sensor._id }).populate("sensor");
    res.status(200).json(values);
  }
});

module.exports = { getValueOFSenssor, createValue };
