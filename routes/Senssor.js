const express = require("express");
const router = express.Router();
const {
    createSenssor,
    updateSenssor,
    deleteSenssor,
    getSenssor,
    getAllSenssor
  } = require("../controller/senssorController");

router.post('/createSenssor', createSenssor);

router.put('/updateSenssor', updateSenssor);

router.delete('/deleteSenssor', deleteSenssor);

router.get('/getSenssor/:key', getSenssor);

router.get('/getAllSenssors', getAllSenssor);






module.exports = router;
