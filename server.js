var http   = require('http');
var url    = require('url');

function start (route, handle) {
	//
	http.createServer(function (request, response){

		var pathName = url.parse(request.url).pathname;

		route(handle, pathName, request, response);

		console.log("Request for" + pathName + "Received.\n");
		
	}).listen(7777);
	
	console.log("Server has started.");
};

exports.start = start;