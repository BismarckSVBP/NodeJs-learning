const express = require("express");

const {
      handleGenerateUniqueid,
     } = require("../controllers/user");
const router = express.Router();


router.post("/i", handleGenerateUniqueid);



module.exports = router;
