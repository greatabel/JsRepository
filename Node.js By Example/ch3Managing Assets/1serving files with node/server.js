var http = require('http');

var fs = require('fs');

var path = require('path');

var files = {};

var port = 9000;
var host = '127.0.0.1';

var  assets = function(req, res) {

    var sendError = function(message, code) {
        res.writeHead(code || 404, {'Content-Type': 'text/html'});
        res.end(message)
    }

    var serve = function(file) {

        var contentType;
        switch(file.ext.toLowerCase()) {
          case "css": contentType = "text/css"; break;
          case "html": contentType = "text/html"; break;
          case "js": contentType = "application/javascript"; break;
          case "ico": contentType = "image/ico"; break;
          case "json": contentType = "application/json"; break;
          case "jpg": contentType = "image/jpeg"; break;
          case "jpeg": contentType = "image/jpeg"; break;
          case "png": contentType = "image/png"; break;
          default: contentType = "text/plain";
        }
        res.writeHead(404, {'Content-Type': contentType});
        res.end(file.content);
    }

};


var app = http.createServer(assets).listen(port, host);
console.log("Listening on " + host + ":" + port);