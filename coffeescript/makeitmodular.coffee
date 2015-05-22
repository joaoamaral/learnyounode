mymodule = require('./mymodule')

dir = process.argv[2]
ext = process.argv[3]

mymodule(dir, ext, (err, list) ->
  if err
   throw err;

  else
    for file in list
      console.log file



)
