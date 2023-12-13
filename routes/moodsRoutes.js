const express = require("express");
const { MoodsValidator } = require("../Utils/validator/moodsValidation");
const router = express.Router();
const {
  createMood,
  getMood,
  getMoods,
  updateMood,
  deleteMood,
} = require("../controller/moodsController");

router.route("/").post(MoodsValidator, createMood);
router.route("/").get(getMoods);
router.route("/:id").get(getMood);
router.route("/:id").put(MoodsValidator, updateMood);
router.route("/:id").delete(MoodsValidator, deleteMood);

module.exports = router;
