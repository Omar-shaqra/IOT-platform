const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");
const Schedule = require("../../models_/scheduleModel");

exports.UserMoodValidator = [
  check("title").trim().isString().notEmpty(),

  check("startTime").trim().isDate().notEmpty(),

  check("endTime").optional().isDate(),

  check("events.*")
    .isArray({ min: 1 })
    .custom((value) => {
      return value.every((item) => typeof item === "string");
    }),

  check("repeat").isIn(["daily", "weekly", "monthly"]).notEmpty(),

  validatorMiddleware,
];
