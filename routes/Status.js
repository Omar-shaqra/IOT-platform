const express = require("express");
const router = express.Router();
const {
  getAllStatus,
  getStatusByID,
  updateStatusyId,
  DeleteStatusByID,
  addStatus,
} = require("../controller/statusController");

router.route("/").post(addStatus);
router.route("/").get(getAllStatus);
router.route("/:id").get(getStatusByID);
router.route("/:id").put(updateStatusyId);
router.route("/:id").delete(DeleteStatusByID);

module.exports = router;
