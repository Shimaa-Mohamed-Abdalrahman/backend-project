const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.write('hello from home')
    }else if (req.url !== '/') {
        var string = req.url
        var arr = string.split('/')
        res.write('hello from ' + arr[1].toString())
    }
    res.end()
})
server.listen(3000)
