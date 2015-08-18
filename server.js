var http = require('http');

var handleRequest = function (req, res) {
  if (req.url == '/favicon.ico') return res.end();

  res.end('Strings are so cool! But this string will be replaced as you experiment!');
};

var server = http.createServer(handleRequest);
server.listen(8000);