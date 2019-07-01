const http = require('http');

const users = {
    admin: 'admin',
    test: 'test'
}

http.createServer(function(request,response) {

    // response.setHeader("Content-Type", 'Access-Control-Allow-Headers', "text/html; charset=utf-8;");
    response.writeHead(200, {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers': 'data'
    });
    if(request.url === "/users"){
        response.write('HELLLLLLO');
    } else {
        response.write("<h5>USERS</h5>");
    }
    response.end();
}).listen(4000, "127.0.0.1", function() {
    console.log("server started listening on port 4000");
});