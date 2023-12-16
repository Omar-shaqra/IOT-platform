const express = require("express");
const { ScheduleValidtion } = require("../Utils/validator/scheduleValidtion");
const router = express.Router();
const {
  createSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
} = require("../controller/scheduleController");

router.route("/").post(ScheduleValidtion, createSchedule);
router.route("/").get(getSchedules);
router.route("/:id").get(getSchedule);
router.route("/:id").put(ScheduleValidtion, updateSchedule);
router.route("/:id").delete(ScheduleValidtion, deleteSchedule);

module.exports = router;
