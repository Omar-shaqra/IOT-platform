const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.RoomValidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required like {Home,Room,Car}."),
  check("image").optional().isString("image is required"),
  check("user").notEmpty().isMongoId().withMessage("Invalid user id format"),
  check("devices")
    .optional()
    .isMongoId()
    .withMessage("Invalid Device id format"),

  validatorMiddleware,
];
