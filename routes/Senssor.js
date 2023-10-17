const express = require("express");
const { sensorValidation } = require("../Utils/validator/sensorValidation");
const router = express.Router();
const {
  createSenssor,
  updateSenssor,
  deleteSenssor,
  getSenssor,
  getAllSenssor,
} = require("../controller/senssorController");

router.post("/createSenssor", sensorValidation, createSenssor);

router.put("/updateSenssor", sensorValidation, updateSenssor);

router.delete("/deleteSenssor", deleteSenssor);

router.get("/getSenssor/:key", getSenssor);

router.get("/getAllSenssors", getAllSenssor);

module.exports = router;
