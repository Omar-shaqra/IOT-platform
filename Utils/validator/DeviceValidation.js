const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");
const UserMood = require("../../models_/UserMoodModel");

exports.UserMoodValidator = [
  check("name").notEmpty().trim().required(),
  check("location").notEmpty().trim().required(),
  check("userID").custom((value, { req }) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new Error("Invalid userID");
    }
    return true;
  }),
  check("scheduleID").custom((value, { req }) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new Error("Invalid scheduleID");
    }
    return true;
  }),
  check("MoodID").custom((value, { req }) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new Error("Invalid userMoodID");
    }
    return true;
  }),

  validatorMiddleware,
];
