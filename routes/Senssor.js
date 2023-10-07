const express = require("express");
const router = express.Router();
const {
    createSenssor,
    updateSenssor,
    deleteSenssor,
    getSenssor
  } = require("../controller/senssorController");

router.post('/createSenssor', createSenssor);

router.put('/updateSenssor', updateSenssor);

router.delete('/deleteSenssor', deleteSenssor);

router.get('/getSenssor/:key', getSenssor);





module.exports = router;
