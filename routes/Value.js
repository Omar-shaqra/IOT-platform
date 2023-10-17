const express = require("express");
const { valueValidation } = require("../Utils/validator/valueValidator");
const router = express.Router();
const { getValueOFSenssor } = require("../controller/valueController");

router.route("/:id").get(getValueOFSenssor);

module.exports = router;
