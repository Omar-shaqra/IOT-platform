const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.locationValidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required like {Home,Room,Car}."),
  check("devices")
    .optional()
    .isMongoId()
    .withMessage("Invalid Device id format"),

  validatorMiddleware,
];
