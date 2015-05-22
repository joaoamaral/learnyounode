http = require('http')
fs = require("fs")
file = process.argv[3]

server = http.createServer((req, res) ->
  res.writeHead(200, {'content-type' : 'text/plain'})

  fs.createReadStream(file).pipe(res)

)
server.listen Number(process.argv[2])
