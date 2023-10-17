const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

const sensorValidation = [
  check("key")
    .notEmpty()
    .withMessage("Key is required")
    .isString()
    .withMessage("Key must be a string")
    .trim(),

  validatorMiddleware,
];

module.exports = {
  sensorValidation,
};
