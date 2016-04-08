var http = require('http');
var fs = require('fs');
var path = require('path');
var files = {};
var port = 9000;

var assets = function(req, res) {

  var sendError = function(message, code) {
    if (code == undefined) {
      code = 404;
    }
    res.writeHead(code || 404, {'Content-Type': 'text/html'});
    res.end(message);
  }

 

}


var app = http.createServer(assets).listen(port, '127.0.0.1');
console.log("Listening on 127.0.0.1:" + port);

// var http = require('http')
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World from Abel!\n');
// }).listen(9000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:9000 #')