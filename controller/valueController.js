const Value = require("../models_/valuesModule");
const Sensor = require("../models_/senssorModule");
const asyncHandler = require("express-async-handler");

const createValue = asyncHandler(async (sensor_key, topic, value) => {
  const value_ = await Value.create({
    sensor: sensor_key,
    topic: topic,
    value: value,
  });
  res.status(201).json({ data: value_ });
});

const getValueOFSenssor = asyncHandler(async (req, res) => {
  const sensorId = req.params.id;

  const sensor = await Sensor.findById(sensorId);
  const values = await Value.find({ sensor: sensor }).populate("sensor");
  res.json(values);
});

module.exports = getValueOFSenssor;
