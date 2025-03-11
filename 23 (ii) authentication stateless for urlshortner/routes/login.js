const express = require("express");

const { handleLogin } = require("../controllers/login");
const router = express.Router();



router.get("/", async (req, res) => {
  return res.render("login");
});

router.post("/i", handleLogin);
module.exports = router;
