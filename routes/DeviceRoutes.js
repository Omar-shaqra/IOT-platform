const express = require("express");
const { DeviceValidator } = require("../Utils/validator/DeviceValidation");
const router = express.Router();
const {
  createDevice,
  getDevice,
  getDevices,
  updateDevice,
  deleteDevice,
} = require("../controller/DeviceController");

router.route("/").post(createDevice);
router.route("/").get(getDevices);
router.route("/:id").get(getDevice);
router.route("/:id").put(updateDevice);
router.route("/:id").delete(deleteDevice);

module.exports = router;
