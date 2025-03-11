const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((request, res) => {
  if (request.url == "/favicon.ico") {
    return res.end();
  }
  const history = `${Date()}: ${request.url}:new request received\n`;
  const myUrl = url.parse(request.url, true);
  console.log(myUrl);

  fs.appendFile(
    "C:/Users/abhay/OneDrive/Desktop/piyushgarg/node js/8/history.txt",
    history,
    (err, result) => {
      switch (myUrl.pathname) {
        case "/":
          res.end("Homepage");
          break;
        case "/about":
          const query = myUrl.query.user;
          res.end(`hi ${query}`);
          break;
        case "/contact":
          res.end("index.html");
          break;
        case "/search":
          const search = myUrl.query.search_thing;
          res.end("you searched : " + search);
          break;
        default:
          res.end("errjhjor");
      }
    }
  );
});
myServer.listen(9900, () => {
  console.log("server started");
});
