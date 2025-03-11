// // const http = require("http");
// // const fs = require("fs");
// // const myServer = http.createServer((request,res)=>{
// // const log =`${Date.now()}:new request received\n`;
// // fs.appendFile("log.txt",log,(err,result) => {
// //     res.end("Hello from abhay's server");
// // })})
// // myServer.listen(3000,() =>{console.log("server started")});

// const http = require("http");
// const fs = require("fs");
// const myServer = http.createServer((request,res)=>{
// const log =`${Date.now()}: ${request.url}:new request received\n`;
// fs.appendFile("log.txt",log,(err,result) => {
//     res.end("Hello from abhay's server");
// })})
// myServer.listen(3000,() =>{console.log("server started")});

const http = require("http");
const fs = require("fs");
const myServer = http.createServer((request, res) => {
  if (request.url == '/favicon.ico') {
    return res.end();
  }
  const history = `${Date.now()}: ${request.url}:new request received\n`;
  fs.appendFile("./node js/7/history.txt", history, (err, result) => {
    switch (request.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("about");
        break;
      case "/contact":
        res.end("index.html");
        break;
    }
  });
});
myServer.listen(3000, () => {
  console.log("server started");
});
