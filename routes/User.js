const express = require("express");
const { userValidation } = require("../Utils/validator/userValidation");
const router = express.Router();
const {
  userAuth,
  getuserProfile,
  registerUser,
  UpdateuserProfile,
  user_projects,
  createUser,
} = require("../controller/userController");

const { protect } = require("../middleware/authMiddleware.js");

router.post("/login", userValidation, userAuth);
router.route("/create").post(userValidation, createUser);
router.route("/").post(userValidation, registerUser);
router.get("/projects", user_projects);
router
  .route("/profile")
  .get(protect, getuserProfile)
  .put(protect, userValidation, UpdateuserProfile);

module.exports = router;
