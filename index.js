var server = require('./server.js');
var router = require('./router.js');
var requestHandler = require('./requestHandler.js');

var handle = {};
handle["/hello"] = requestHandler.hello;

server.start(router.route, handle);