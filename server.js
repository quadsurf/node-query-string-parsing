var http = require('http');
var url = require('url');
var server = null;

// OPTIONS
// href: '/status?name=ryan',
// search: '?name=ryan',
// query: {name: 'ryan'},
// pathname: '/status'

// var viewInBrowser = 'query' || 'href' || 'search' || 'pathname';

function handleRequest(req, res) {
  var urlSplit = url.parse(req.url, true);
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(urlSplit.query));
}

server = http.createServer(handleRequest);
server.listen(8000, function() {
    console.log("Listening on PORT 8000...");
});

// TEST WITH:
// http://localhost:8000/test?testingIsFun=Sometimes%20not%20always&skiingIsFun=Always








// var http = require('http');
// var server = null,
//     urlTwo = {
//       'query': {}
//     };
//
// var splitQuery = function(query) {
//   var queryObj = {};
//   var queryArr = query.split("&");
//   queryArr.forEach(function(data){
//     var pairs = data.split("=");
//     queryObj[pairs[0]] = pairs[1];
//   });
//   return queryObj;
// };
//
// function handleRequest(req, res) {
//   var urlSplit = req.url.split('?');
//   urlTwo["pathname"] = urlSplit[0];
//   res.setHeader("Content-Type", "text/plain");
//   if (urlSplit[1]) { // if a query exists
//     var queries = splitQuery(urlSplit[1]);
//   res.end(JSON.stringify(queries));
//   }
// }
// server = http.createServer(handleRequest);
// server.listen(8000, function() {
//     console.log("Listening on PORT 8000...");
// });












// var http = require('http');
// var server = null,
//     urlTwo = {
//       'query': {}
//     };
//
// var splitQuery = function(query) {
//   var queryObj = {};
//   var queryArr = query.split('&');
//   queryArr.forEach(function(data){
//     var pairs = data.split('=');
//
//   })
// }
//
// function handleRequest(req, res) {
//   var urlSplit = req.url.split('?');
//   console.log(urlSplit);
//   urlTwo["pathname"] = urlSplit[0];
//   res.setHeader("Content-Type", "text/plain");
//   if (urlSplit[1]) { // if a query exists
//     // if query string has multiple values, loop them all into an object
//     var qvalues = urlSplit[1].split('&');
//     if (qvalues[1]){
//       qvalues.forEach(x => {
//
//       })
//     }
//
//     var query = urlSplit[1].split('=');
//     if (query[1]){ // if the query is formatted correctly
//       urlTwo.query[query[0]] = query[1];
//       res.end(JSON.stringify(urlTwo.query));
//     }
//   }
//   res.end(urlTwo.pathname);
// };
// server = http.createServer(handleRequest);
// server.listen(8000, function() {
//     console.log("Listening on PORT 8000...");
// });






// var http = require('http');
//
// var server = null;
// var urlTwo = {
//   pathname: '',
//   query: {}
// }
//
// function handleRequest(req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   var pathSplit = req.url.split('?');
//   console.log(pathSplit);
//   urlTwo.pathname = pathSplit[0];
//
//
//
//   urlTwo.query = pathSplit[1];
//   res.end(urlTwo.query);
//   urlTwo.query.split('=')[0];
// };
//
// server = http.createServer(handleRequest);
//
// server.listen(8000, function() {
// 	console.log("Listening on PORT 8000...");
// });
//
// // var http = require('http');
// // var fs = require('fs');
// //
// // http.createServer(function(req, res){
// //   res.writeHead(200, {'Content-Type':'text/html'});
// //
// //   fs.createReadStream(__dirname + '/index.html').pipe(res);
// //
// // }).listen(1337, '127.0.0.1');
