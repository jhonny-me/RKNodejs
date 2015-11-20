var http = require('http');



function hello (request, response) {
	// body...
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("hello");
	response.end();
}

exports.hello = hello;