const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.DeviceValidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required like {Home,Room,Car}."),
  check("moods").optional().isMongoId().withMessage("Invalid Mood id format"),

  validatorMiddleware,
];
