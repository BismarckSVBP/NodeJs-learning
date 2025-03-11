const express = require("express");
const User = require("../models/user");
const router = express.Router();


router.get("/", async (req, res) => {
    const alldata = await User.find({});
    return res.render("user",{
      data : alldata,
  
    });
});

module.exports = router;