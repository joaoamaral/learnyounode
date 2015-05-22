http = require 'http'
url = require 'url'

server = http.createServer (req, res) ->

  if req.method != 'GET'
    res.end 'need a GET request\n'

  res.writeHead(200, { 'Content-Type': 'application/json' })
  path = url.parse(req.url, true)
  date = new Date(path.query.iso)

  if path.pathname is '/api/parsetime'
    res.end JSON.stringify
      hour: date.getHours()
      minute: date.getMinutes()
      second: date.getSeconds()

  else if path.pathname is '/api/unixtime'
    res.end JSON.stringify
      unixtime: date.getTime()

  else res.end ''

server.listen process.argv[2]
