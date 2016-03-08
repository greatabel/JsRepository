var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'text/plian'});
    res.end('Hello World again!\n');
}).listen(9000, '127.0.0.1');

console.log('server running at Http://127.0.0.1:9000')
