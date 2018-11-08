const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const port = process.argv[2] || 9000

http.createServer(function(req, res) {
    console.log(`${req.method} ${req.url}`)

    //parsing
    const parseUrl = url.parse(req.url);
    //extract URL path
    let pathname = `.${parseUrl.pathname}`
    //based on the URL path, extract the file ext ..
    const ext = path.parse(pathname).ext
    //dictonary of ext to MIME typere
    const map = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml'
    }

    fs.exists(pathname, function (exist) {
        if (!exist) {
            //if the file not found
            res.statusCode = 404
            res.end(`File ${pathname} not found!`)
            return;
        }
        //if is a directory search for index file matching the extention
        if (fs.statSync(pathname).isDirectory()) pathname += '/index' + ext;
        //read file from file system
        fs.readFile(pathname, function(err, data) {
            if(err) {
                res.status = 500;
                res.end(`Error getting the filea: ${err}.`)
            } else {
                //if the file is found, set Content-type and send data
                res.setHeader('Content-type', map[ext] || 'text/plain' )
                res.end(data)
            }
        })
    })
}).listen(parseInt(port))

console.log(`Server listening on port ${port}`)