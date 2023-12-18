const express = require("express");
const { MoodsValidator } = require("../Utils/validator/MoodsValidation");
const router = express.Router();
const {
  createMood,
  getMood,
  getMoods,
  updateMood,
  deleteMood,
} = require("../controller/MoodsController");

router.route("/").post(MoodsValidator, createMood);
router.route("/").get(getMoods);
router.route("/:id").get(getMood);
router.route("/:id").put(MoodsValidator, updateMood);
router.route("/:id").delete(deleteMood);

module.exports = router;
