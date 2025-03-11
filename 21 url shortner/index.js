const express = require("express");

const { connectToMongoDB } = require("./connections");
const urlRoute = require('./routes/url');
const URL = require("./models/url");
const app = express();

const port = 921;
connectToMongoDB("mongodb://localhost:27017/shorturl2").then(() =>
  console.log("MongoDb connected")
);
app.use(express.json());

app.use("/url", urlRoute);
app.get("/abc",async(req,res)=>{
  res.end("<h1>hello");
})

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});
app.listen(port, () => console.log(`Server Started at PORT:${port}`));
