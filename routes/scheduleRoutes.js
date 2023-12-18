const express = require("express");
const { ScheduleValidator } = require("../Utils/validator/schedulesValidation");
const router = express.Router();
const {
  createSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
} = require("../controller/scheduleController");

router.route("/").post(MoodsValidator, createSchedule);
router.route("/").get(getSchedule);
router.route("/:id").get(getSchedules);
router.route("/:id").put(MoodsValidator, updateSchedule);
router.route("/:id").delete(deleteSchedule);

module.exports = router;
