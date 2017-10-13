var http = require('http');

var fs = require('fs');

var path = require('path');

var files = {};

var port = 9000;
var host = '127.0.0.1';

var  assets = function(req, res) {

};

var app = http.createServer(assets).listen(port, host);
console.log("Listening on " + host + ":" + port);