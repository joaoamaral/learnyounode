var fs = require('fs'),
    path = require('path'),
    pathname = process.argv[2],
    ext = process.argv[3];

fs.readdir(pathname, function callback(err, contents){
  for (var i = 0; i < contents.length; i++ ){
    if (path.extname(contents[i]) == '.'+ext) {
      console.log(contents[i])
    }
  }

})


// var fs = require('fs')
// var path = require('path')
//
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
