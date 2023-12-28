const express = require("express");
const { RoomValidator } = require("../Utils/validator/RoomValidation");
const router = express.Router();
const {
  createRoom,
  getRoom,
  getRoooms,
  updateRoom,
  deleteRoom,
} = require("../controller/RoomController");

router.route("/").post(RoomValidator, createRoom);
router.route("/").get(getRoooms);
router.route("/:id").get(getRoom);
router.route("/:id").put(RoomValidator, updateRoom);
router.route("/:id").delete(deleteRoom);

module.exports = router;
