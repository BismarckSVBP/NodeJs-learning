const shortid = require("shortid");

const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ Error: "url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });


  const allUrls = await URL.find({});
  return res.render("urlshortner",{
    id: shortID,
    urls : allUrls,
  });
  // router.get("/", async (req, res) => {
  //   const allUrls = await URL.find({});
  //   return res.render("urlshortner",{
  //     urls : allUrls,
  // return res.json({ id: shortID });
}

async function handleGetanalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalclicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetanalytics,
};
