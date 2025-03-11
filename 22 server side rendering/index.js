const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connections");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const staticlogin = require("./routes/staticlogin");
const testing = require("./routes/testing");
const urlshortner = require("./routes/urlshortners");

const URL = require("./models/url");
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

app.use("/url", urlRoute);
app.use("/urlshortner", urlshortner);
app.use("/render", staticRoute);
app.use("/login", staticlogin);
app.use("/testing", testing);

////in testing file
// app.get("/testing", async (req, res) => {
//   res.end("<h1>helolo");
// });

////in staticRoute file
// app.get("/render", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home",{
//     urls : allUrls,

//   });
// });

////in staticlogin file
// app.get("/login", async (req, res) => {
//   return res.render("login");
// });
//

////another way to rendering html thing
// app.get("/returndata", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.end(`
//     <html>
//       <head>
//         <title>DATA DOCUMENT</title>
//       </head>
//       <body>
//         <ol>
//           ${allUrls.map(
//             (url) =>
//               `<li>${url.shortId} -> ${url.redirectURL} -> ${url.visitHistory.length}</li>`
//           )}
//         </ol>
//       </body>
//     </html>
//   `);
// });

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
