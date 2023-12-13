const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");
const Moods = require("../../models_/moodsModel");

exports.MoodsValidator = [
  check("name")
    .notEmpty()
    .withMessage("name is required")
    .custom(async (value) => {
      const existingMood = await Moods.findOne({ name: value });
      if (existingMood) {
        throw new Error("Mood name already exists");
      }
    }),

  validatorMiddleware,
];
