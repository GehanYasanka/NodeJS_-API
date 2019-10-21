var  http = require ('http');
http.createServer(function(req,res){
  res.end("HelloWorld");
}).listen(8080);
console.log("Hari");