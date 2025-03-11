const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connections");
const urlRoute = require("./routes/url");

const urlshortner = require("./routes/urlshortners");
const user = require("./routes/user");
const use = require("./routes/use");
const URL = require("./models/url");


// const User = require("./models/user");
const app = express();

const port = 9210;
connectToMongoDB("mongodb://localhost:27017/shorturl2").then(() =>
  console.log("MongoDb connected")
);
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", user);
app.use("/user", use);


// app.use((req, res, next) => { 
//   const a = app.use("/user", use);
//   if (a==0) {
//     return res.json({ message: "Please enter valid credentials" });
//   } else {
//     next();
//   }
// });

app.use("/url", urlRoute);
app.use("/urlshortner", urlshortner);

app.get("/url/:shortId", async (req, res) => {
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
