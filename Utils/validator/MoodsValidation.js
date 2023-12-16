const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.MoodsValidator = [
  check("name").notEmpty().withMessage("Name is required."),
  check("location").notEmpty().withMessage("Location is required."),
  check("userID").notEmpty().withMessage("User ID is required."),
  check("schedules.*.startTime")
    .notEmpty()
    .withMessage("Start time is required for each schedule."),
  check("schedules.*.endTime")
    .notEmpty()
    .withMessage("End time is required for each schedule."),
  check("isFav").optional().isBoolean().withMessage("Invalid value for isFav."),
  validatorMiddleware,
];
