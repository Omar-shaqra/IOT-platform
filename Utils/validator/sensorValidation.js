const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

const sensorValidation = [
  check("projectId").isMongoId().withMessage("Invalid project id format"),
  check("jop_description").notEmpty().withMessage("jop_description required"),
  validatorMiddleware,
];

module.exports = {
  sensorValidation,
};
