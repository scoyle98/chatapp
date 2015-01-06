var http = require ('http');
var server = http.createServer(function(request, response){
  console.log("the url is " + request.url);
  response.end("Hello World")
})
server.listen(3000)
