http = require 'http'
bl = require 'bl'
results = []
count = 0



printResults = () ->
  for result in results
    console.log result



httpGet = (index) ->
  http.get(process.argv[2 + index], (response) ->
    response.pipe(bl((err, data) ->

      if err
        return console.error(err)

      results[index] = data.toString()
      count++

      if count == 3
        printResults()
    )))


for i in [0..2]
  httpGet(i)





#
# index = 0
# while index < 3
#
#   http.get(process.argv[2 + index], (response) ->
#     response.pipe(bl((err, data) ->
#       if (err)
#         return console.error err
#
#       results[index] = data.toString()
#       console.log data.toString()
#       count++
#
#
#     ))
#   )
#
#   index++
#
# if (count == 3)
#   for r in results
#     console.log r
#
#
#
