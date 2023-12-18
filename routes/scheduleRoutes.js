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

router.route("/").post(ScheduleValidator, createSchedule);
router.route("/").get(getSchedule);
router.route("/:id").get(getSchedules);
router.route("/:id").put(ScheduleValidator, updateSchedule);
router.route("/:id").delete(deleteSchedule);

module.exports = router;
