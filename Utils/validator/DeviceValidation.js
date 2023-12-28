const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.DeviceValidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required like {Home,Room,Car}."),
  check("image").optional().isURL("image url is wrong"),
  check("KWH").optional().isNumeric("KWH should be a Number"),
  check("Room").notEmpty().isMongoId().withMessage("Invalid Room id format"),
  check("schedules")
    .optional()
    .isMongoId()
    .withMessage("Invalid schedules id format"),
  check("moods").optional().isMongoId().withMessage("Invalid Mood id format"),

  validatorMiddleware,
];
