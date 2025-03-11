const http = require("http");

const myServer =http.createServer((request,res) => {
    // console.log(request.headers);
    console.log("New request recorded");
    // console.log(request);
    res.end("Hello from bismarck's server");
});

myServer.listen(800,() => console.log("Server started hhst"));
