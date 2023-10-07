const express = require("express");
const router = express.Router();
const {
    createSenssor,
    updateSenssor,
    deleteSenssor
  } = require("../controller/senssorController");

router.post('/createSenssor', createSenssor);

router.put('/updateSenssor', updateSenssor);

router.delete('/deleteSenssor', deleteSenssor);





module.exports = router;
