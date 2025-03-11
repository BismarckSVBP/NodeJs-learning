const express = require("express");

const { handleLogin } = require("../controllers/login");
const router = express.Router();


router.get("/i", handleLogin);
module.exports = router;
