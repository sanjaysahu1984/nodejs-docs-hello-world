var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World sanjay sahu test for jenkins docker testing test branch!");

});

var port = process.env.PORT || 1303;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
