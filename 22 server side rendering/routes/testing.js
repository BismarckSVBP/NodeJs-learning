const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.end("<h1>helolo");
});
module.exports = router;
