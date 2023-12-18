const express = require("express");
const { locationValidator } = require("../Utils/validator/locationValidation");
const router = express.Router();
const {
  createLocation,
  getLocation,
  getLocations,
  updateLocation,
  deleteLocation,
} = require("../controller/locationController");

router.route("/").post(locationValidator, createLocation);
router.route("/").get(getLocation);
router.route("/:id").get(getLocations);
router.route("/:id").put(locationValidator, updateLocation);
router.route("/:id").delete(deleteLocation);

module.exports = router;
