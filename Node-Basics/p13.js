// http module

const http = require('http')
let port = 3000

// node controller = function(req,res) {}  req -> request(incoming data) , res -> Response(outgoing data)

http.createServer(function (req,res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(`<div>
                <h1>Welcome to node http server module</h1>
                <p>this is our first message</p>
    
    </div>`)
}).listen(port)

console.log(`server is started running @http://localhost:${port}`)

// ipv4 port num = 4digits
// ipv6 port num = 5digits