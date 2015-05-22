http = require 'http'
map = require 'through2-map'

server = http.createServer((req, res) ->


  if req.method == 'POST'

    req.pipe(map((chunk) ->
      return chunk.toString().toUpperCase()
    )).pipe(res)

  else
    return res.end('send me a POSTcard, bye bye\n')


)
server.listen(Number(process.argv[2]))
