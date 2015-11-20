

function route (handle, pathName, request, response) {
	// body...
	if (typeof handle[pathName] === 'function') {

		handle[pathName](request, response);
	} else{

		console.log("No handle found for request path:" + pathName);

		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 not found");
		response.end();
	};
}

exports.route = route;