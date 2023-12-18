const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.ScheduleValidator = [
  check("name").notEmpty().withMessage("Name is required."),

  check("start")
    .notEmpty()
    .isDate()
    .custom((value, { req }) => {
      return value < req.body.end;
    }),
  check("end")
    .notEmpty()
    .isDate()
    .custom((value, { req }) => {
      return value > req.body.start;
    }),
  validatorMiddleware,
];
