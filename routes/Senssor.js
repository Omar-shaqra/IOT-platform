const express = require("express");
const router = express.Router();
const {
    createSenssor
  } = require("../controller/senssorController");

router.post('/createSenssor', createSenssor);




module.exports = router;
