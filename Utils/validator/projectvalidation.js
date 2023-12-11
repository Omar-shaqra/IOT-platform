const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");
const Project = require("../../models_/projectModule");

exports.getprojectValidator = [
  check("id").isMongoId().withMessage("Invalid project id format"),
  validatorMiddleware,
];

exports.createprojectValidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required")
    .custom(async (value) => {
      const existingProject = await Project.findOne({ name: value });
      if (existingProject) {
        throw new Error("Project name already exists");
      }
    }),

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
