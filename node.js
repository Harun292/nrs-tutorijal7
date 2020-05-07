var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Sarajevo Bugojno Travnik Zenica Tuzla Mostar Vitez");
}).listen(8080);