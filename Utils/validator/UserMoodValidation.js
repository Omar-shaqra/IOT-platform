const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");
const UserMood = require("../../models_/UserMoodModel");

exports.UserMoodValidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required")
    .custom(async (value) => {
      const existingMood = await UserMood.findOne({ name: value });
      if (existingMood) {
        throw new Error("Mood name already exists");
      }
    }),
  check("userID").isMongoId().withMessage("Invalid user id format"),
  check("moodID").isMongoId().withMessage("Invalid mood id format"),
  check("isFavorite")
    .optional()
    .isBoolean()
    .withMessage("isFavorite must be a boolean"),

  validatorMiddleware,
];
