const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.getprojectValidator = [
  check("id").isMongoId().withMessage("Invalid project id format"),
  validatorMiddleware,
];

exports.createprojectValidator = [
  check("name").notEmpty().withMessage("name is required"),

  check("owner")
    .notEmpty()
    .withMessage("owner required")
    .isMongoId()
    .withMessage("Invalid project id format"),

  validatorMiddleware,
];

exports.updateprojectValidator = [
  check("id").isMongoId().withMessage("Invalid project id format"),

  ,
  validatorMiddleware,
];

exports.deleteprojectValidator = [
  check("id").isMongoId().withMessage("Invalid project id format"),
  validatorMiddleware,
];
