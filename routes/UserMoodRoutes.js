const express = require("express");
const { UserMoodValidator } = require("../Utils/validator/UserMoodValidation");
const router = express.Router();
const {
  createUserMood,
  getUserMood,
  getUserMoods,
  updateUserMood,
  deleteUserMood,
} = require("../controller/UsermoodController");

router.route("/").post(UserMoodValidator, createUserMood);
router.route("/").get(getUserMoods);
router.route("/:id").get(getUserMood);
router.route("/:id").put(UserMoodValidator, updateUserMood);
router.route("/:id").delete(UserMoodValidator, deleteUserMood);

module.exports = router;
