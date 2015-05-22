http = require 'http'
bl = require 'bl'
url = process.argv[2]

http.get(url, (response) ->
  response.setEncoding 'utf8'

  response.pipe(bl((err, data) ->
    if err
      return console.error(err)
    data = data.toString()
    console.log data.length
    console.log data

  ))
)
