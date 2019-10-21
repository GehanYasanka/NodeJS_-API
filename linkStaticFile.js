var  express = require('express');
var  app = express();

app.use('/mycssfile',express.static(__dirname+'/css'));

app.get("/",function(req,res){
	res.sendfile('home.html',{root:__dirname});
});

app.listen(8080,function(){
	console.log("server is up");
});