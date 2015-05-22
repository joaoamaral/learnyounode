var http = require("http");
var url = process.argv[2];

http.get(url, function (response){
  response.setEncoding('utf8');

  response.on("data", function(data){
    console.log(data);
  });

  response.on("error", console.error);

  // response.on("end", function(data){
  //   // console.log("");
  // });


});


// official solution

// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })
