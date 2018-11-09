const http = require('http')
const host = 'localhost'
const port = 9999
const server = http.createServer((req, res) => {
    //console.log(req.url)
    switch(req.url){
        case '/' : res.end('Principal')
        case '/produtos' : res.end('Produtos')
    }
})
server.listen(port, host, () => {
    console.log('Servidor funcionando!')
})