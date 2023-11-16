const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

const statusValidation = [
  check("sensorID")
    .notEmpty()
    .withMessage("Sensor is required")
    .isMongoId()
    .withMessage("Invalid Sensor id format"),

  check("userID")
    .notEmpty()
    .withMessage("User is required")
    .isMongoId()
    .withMessage("Invalid User id format"),

  check("status_type").notEmpty().withMessage("Status type is required").trim(),

  validatorMiddleware,
];

module.exports = {
  statusValidation,
};
