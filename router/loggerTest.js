const express = require("express");
const router = express.Router();

const {
  loggerInfoTest,
  loggerErrorTest,
} = require("../controllers/loggerTest");

router.get("/info", loggerInfoTest);
router.get("/error", loggerErrorTest);

module.exports = router;
