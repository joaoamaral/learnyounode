net = require('net')

zeroFill = (i) ->
  if i < 10
    '0' + i
  else
    return i

  # (i < 10 ? '0' : '') + i


now = () ->
  d = new Date()
  return d.getFullYear() + '-' + zeroFill(1 + d.getMonth()) + '-' + zeroFill(d.getDate()) + ' ' + zeroFill(d.getHours()) + ':' + zeroFill(d.getMinutes())

server = net.createServer ((socket) ->
  socket.write(now()+'\n')
  socket.end()

)
server.listen(Number(process.argv[2]))
