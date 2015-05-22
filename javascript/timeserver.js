var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + (d.getMonth() + 1) + '-'
//     + d.getDate() + ' '
//     + d.getHours() + ':'
//     + d.getMinutes()
// }

var server = net.createServer(function (socket) {
  socket.write(now()+'\n')
  socket.end()

  // "YYYY-MM-DD hh:mm"
  // "2013-07-06 17:42"

})
server.listen(Number(process.argv[2]))
