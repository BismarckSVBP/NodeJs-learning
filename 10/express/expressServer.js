// const http = require("http");

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("hello from bismarck server");
// });

// app.get("/about", (req, res) => {
//   res.end("welcome to about section"+"Hey " +req.query.name + "you age is " + req.query.age);
// });


// const myServer = http.createServer(app);
// myServer.listen(9800, () => {
//   console.log("server start ho gya hai");
// });



const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from bismarck server");
});

app.get("/about", (req, res) => {
  res.end("welcome to about section"+"Hey " +req.query.name + "you age is " + req.query.age);
});


app.listen(9800, () => {
  console.log("server start ho gya hai");
});