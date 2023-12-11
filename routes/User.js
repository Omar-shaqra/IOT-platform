const express = require("express");
const { userValidation } = require("../Utils/validator/userValidation");
const router = express.Router();
const {
  userAuth,
  getuserProfile,
  registerUser,
  UpdateuserProfile,
  user_projects,
  createProjectUser,
  getUser,
  getUsers,
  deleteOne,
  deleteProjectUser,
} = require("../controller/userController");

const { protect } = require("../middleware/authMiddleware.js");

router.post("/login", userAuth);
router.route("/").post(userValidation, registerUser).get(getUsers);
router.route("/:id").get(getUser).delete(deleteOne);
router.get("/:id/projects", user_projects);

router.route("/:id").post(createProjectUser);
router.delete("/deleteProjectUser/:id", deleteProjectUser);

router
  .route("/profile")
  .get(protect, getuserProfile)
  .put(protect, userValidation, UpdateuserProfile);

module.exports = router;
