fs = require('fs')
path = require('path')
pathname = process.argv[2]
ext = process.argv[3]

fs.readdir(pathname, (err, contents) ->
  for c in contents
    if (path.extname(c) == '.'+ext)
      console.log(c)


)
