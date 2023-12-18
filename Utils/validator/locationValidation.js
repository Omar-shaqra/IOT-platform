const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.locationValidator = [
  check("name").notEmpty().withMessage("Name is required."),
  check("location")
    .notEmpty()
    .withMessage("Location is required like {Home,Room,Car}."),
  check("moods").isMongoId().withMessage("Invalid project id format"),

  validatorMiddleware,
];
