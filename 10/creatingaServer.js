const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(request, res) {
  if (request.url == "/favicon.ico") {
    return res.end();
  }
  const history = `${Date()}: ${request.method}:new request received\n`;
  const myUrl = url.parse(request.url, true);
  console.log(myUrl);

  fs.appendFile(
    "C:/Users/abhay/OneDrive/Desktop/piyushgarg/node js/10/history.txt",
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
        //signup case
        case "/signup":
          if (request.method == "GET") {
            res.end("This is a signuop form");
            break;
          } else if (request.method == "POST") {
            //DATABASE QUERY MAIN USER KE DWARA DIYE GAYE DATA KO SEND KAR DENGE
            res.end("Sucessfully signup");
          }
          break;
        default:
          res.end("error");
      }
    }
  );
}
const myServer = http.createServer(myHandler);

myServer.listen(7800, () => {
  console.log("server started");
});
