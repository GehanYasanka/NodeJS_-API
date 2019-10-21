var  express = require('express');
var  app = express();
var  fs = require('fs');
var  path = require('path');
var  bodyparser = require('body-parser');

app.use(bodyparser());

app.use('/mycssfile',express.static(__dirname+'/css'));
app.get("/",function(req,res){
	res.sendfile('home.html',{root:__dirname});
	//res.send("my name is"+JSON.stringify(req.query.name));
});
app.post("/user",function(req,res){
	res.sendfile('home.html',{root:__dirname});
	res.send("my name is"+JSON.stringify(req.body.username)+""+JSON.stringify(req.body.lastname));
});

app.listen(8080,function(){
	console.log("server is up");
});