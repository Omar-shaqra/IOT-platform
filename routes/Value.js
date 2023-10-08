const express = require("express");
const router = express.Router();
const { getValueOFSenssor } = require("../controller/valueController");

router.route("/:id").get(getValueOFSenssor);

module.exports = router;
