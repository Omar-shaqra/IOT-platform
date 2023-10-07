const express = require("express");
const router = express.Router();
const {
  userAuth,
  getuserProfile,
  registerUser,
  UpdateuserProfile,
  user_projects,
} = require("../controller/userController");

const { protect } = require("../middleware/authMiddleware.js");

router.post("/login", userAuth);

router.route("/").post(registerUser);
router.get("/projects", user_projects);
router
  .route("/profile")
  .get(protect, getuserProfile)
  .put(protect, UpdateuserProfile);

module.exports = router;
