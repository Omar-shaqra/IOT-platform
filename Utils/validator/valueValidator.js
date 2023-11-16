const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

const valueValidation = [
  check("sensor")
    .notEmpty()
    .withMessage("Sensor is required")
    .isMongoId()
    .withMessage("Sensor is required"),

  check("topic").notEmpty().withMessage("Topic is required"),

  check("value")
    .notEmpty()
    .withMessage("Value is required")
    .isNumeric()
    .withMessage("Value must be a number"),
];

module.exports = {
  valueValidation,
};
