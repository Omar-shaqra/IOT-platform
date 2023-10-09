const express = require("express");
const {
  getprojectValidator,
  createprojectValidator,
  updateprojectValidator,
  deleteprojectValidator,
} = require("../Utils/validator/projectvalidation");

const Authservices = require("../controller/userController");
const Projectclass = require("../controller/projectController");
const projectobject = new Projectclass();

const router = express.Router();

router.route("/").get(projectobject.getproject).post(
  //  Authservices.protect,
  //  Authservices.allowedto("admin", "manager"),
  createprojectValidator,
  projectobject.createProject
);
router
  .route("/:id")
  .get(getprojectValidator, projectobject.getoneproject)
  .put(projectobject.updateProject)
  //  Authservices.protect,
  // Authservices.allowedto("admin", "manager"),

  .delete(
    //  Authservices.protect,
    // Authservices.allowedto("admin"),
    deleteprojectValidator,
    projectobject.deleteproject
  );

router.get("/:id/users" , projectobject.getAllUsersOfProject );

router.get("/:id/owner", projectobject.getOwnerOfProject );

module.exports = router;
