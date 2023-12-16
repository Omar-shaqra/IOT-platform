const express = require("express");
const { MoodsValidator } = require("../Utils/validator/MoodsValidation");
const router = express.Router();
const {
  createMood,
  getMood,
  getMoods,
  updateMood,
  deleteDevice,
} = require("../controller/DeviceController");

router.route("/").post(createMood);
router.route("/").get(getMood);
router.route("/:id").get(getMoods);
router.route("/:id").put(updateMood);
router.route("/:id").delete(deleteDevice);

module.exports = router;
