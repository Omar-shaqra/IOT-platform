const express = require("express");
const router = express.Router();
const {
    createSenssor,
    updateSenssor
  } = require("../controller/senssorController");

router.post('/createSenssor', createSenssor);

router.put('/updateSenssor', updateSenssor);





module.exports = router;
