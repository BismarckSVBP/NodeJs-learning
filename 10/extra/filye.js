var http = require('http');

var fs = require('fs');

http.createServer(function (req, res) {

fs.readFile('p.text', function(err, data) {

res.writeHead(200, {'Content-Type': 'text'});

res.write(data);

return res.end();

});

}).listen(8080);
console.log('Saved!');