const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.ScheduleValidator = [
  check("name").notEmpty().withMessage("Name is required."),

  check("start")
    .notEmpty()

    .custom((value, { req }) => {
      return value < req.body.end;
    }),
  check("end")
    .notEmpty()

    .custom((value, { req }) => {
      return value > req.body.start;
    }),
  validatorMiddleware,
];
