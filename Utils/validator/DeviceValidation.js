const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatormiddleware");

exports.DeviceValidator = [
  check("name").notEmpty().withMessage("name is required"),
  check("location").notEmpty().withMessage("location required"),
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

  validatorMiddleware,
];
