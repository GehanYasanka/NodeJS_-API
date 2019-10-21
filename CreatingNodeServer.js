var mod = require('./model');
var http = require ('http');
http.createServer(function(req,res){
  res.end("HelloWorld");
}).listen(8080);
console.log("Hari");

 console.log(mod.myvar);
 mod.func1();
 mod.func2();
 console.log(mod);
 
