const { check } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

const userValidation = [
  check("fullname").notEmpty().withMessage("fullname is required").trim(),

  check("email")
    .notEmpty()
    .withMessage("email is required")
    .normalizeEmail()
    .trim(),

  check("password")
    .notEmpty()
    .withMessage("password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/)
    .withMessage(
      `Password must meet requirements are one or more of  [Lowercase letter, Uppercase letter, Number, Special character, Minimum length of 6 ]`
    )
    .trim(),

  check("phone")
    .isMobilePhone("any")
    .withMessage("Must be a valid phone number")
    .trim(),

  check("role").notEmpty().withMessage("password is required"),
  validatorMiddleware,
];

module.exports = {
  userValidation,
};
