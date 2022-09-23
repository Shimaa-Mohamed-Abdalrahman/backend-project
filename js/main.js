const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.write('hello from home')
    }else if (req.url === '/about') {
        res.write('hello from about')
    }
    res.end()
})
server.listen(3000)
