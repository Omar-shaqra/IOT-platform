const express = require("express");
const { statusValidation } = require("../Utils/validator/statusValidation");
const router = express.Router();
const {
  getAllStatus,
  getStatusByID,
  updateStatusyId,
  DeleteStatusByID,
  addStatus,
} = require("../controller/statusController");

router.route("/").post(statusValidation, addStatus);
router.route("/").get(getAllStatus);
router.route("/:id").get(getStatusByID);
router.route("/:id").put(statusValidation, updateStatusyId);
router.route("/:id").delete(statusValidation, DeleteStatusByID);

module.exports = router;
