const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.write('hello from home5')
    }else if (req.url === '/about') {
        res.write('hello from about5')
    }
    res.end()
})

server.listen(3000)
