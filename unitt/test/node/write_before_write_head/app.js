#!/usr/bin/env node

require('unit-http').createServer(function (req, res) {
    res.write('blah');
    res.writeHead(200, {'Content-Type': 'text/plain'}).end();
}).listen(7080);
