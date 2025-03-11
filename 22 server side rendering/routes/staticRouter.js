const express = require("express");
const URL = require("../models/url");

const router = express.Router();


router.get("/render", (req,res)=>{
    return res.json("home")
});
// router.get("/", async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render("urlshortner",{
//       urls : allUrls,
  
//     });
// });

module.exports = router;