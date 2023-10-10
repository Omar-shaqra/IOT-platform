const express = require("express");
const { getAllMsg } = require("../controller/redisController");
const router = express.Router();

router.get("/getAllMsg", getAllMsg);

module.exports = router;
