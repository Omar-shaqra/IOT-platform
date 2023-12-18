const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.MoodsValidator = [
  check("name").notEmpty().withMessage("Name is required."),
  check("type").notEmpty().isIn(["light", "music", "temperature"]),
  check("userID").isMongoId().withMessage("Invalid userID id format"),
  check("isFav").optional().isBoolean().withMessage("Invalid value for isFav."),
  validatorMiddleware,
];
