const express = require("express");

const {
      handleGenerateNewShortURL,
     handleGetanalytics,
     } = require("../controllers/url");
const router = express.Router();

// router.route("/").post(handleGenerateNewShortURL);
router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetanalytics);
// router.route("/URL/analytics/:id").get(handleGetanalytics);

module.exports = router;
