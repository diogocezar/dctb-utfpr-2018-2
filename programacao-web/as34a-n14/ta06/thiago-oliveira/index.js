var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (request, response) {
    console.log('starting server ..');

    var filePath = '.' + request.url;
    
    if (filePath === './')
        filePath += 'index.html';
    else
        filePath = '.' + request.url;
   
    var extname = path.extname(filePath)
    var contentType = 'text/html';

    switch(extname) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpeg'
            break;
        case '.json':
            contentType = 'text/json'
            break;
        case '.svg':
            contentType = 'image/svg+xml'
            break;
    }

    fs.readFile(filePath, function(error, content){
        
        if (error) {
            
            if(error.code == 'ENOENT'){
                console.log('not found')
                response.writeHead(401)
                response.end()
            } else {
                response.writeHead(500);
                response.end('Sorry man, my server is down' + error);
                response.end()
            }
        }else {
            response.writeHead(200, { 'Content-Type' : contentType})
            response.end(content, 'utf-8')
        }
    })
});
server.listen(8080, ()=> {
    console.log("server listen at http://127.0.0.8080");
});
