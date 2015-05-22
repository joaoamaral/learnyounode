var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {

  if (req.method != 'GET')
    return res.end('need a GET request\n')

  var content = url.parse(req.url, true)
  var reqEndPoint = content.path.split('?')[0]
  var reqValue = content.path.split('?')[1].split('=')[1]
  res.writeHead(200, {'content-type' : 'application/json'})
  var dateValue = new Date(reqValue);

  if (reqEndPoint == '/api/parsetime'){

    res.end(JSON.stringify(
      {
        "hour": dateValue.getHours(),
        "minute": dateValue.getMinutes(),
        "second": dateValue.getSeconds()
      }))


  } else if (reqEndPoint == '/api/unixtime'){
      res.end(JSON.stringify({"unixtime": dateValue.getTime()}));

  } else {

    return res.end('need a valid request\n')

  }

  // node -pe "require('url').parse('/test?q=1', true)"
  // /api/parsetime?iso=2013-08-10T12:10:15.474Z

  /// HTML HyperText MarkUP Language .html
  // MarkDOWN .md


  res.end();
})
server.listen(Number(process.argv[2]))



// Official Solution

// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
