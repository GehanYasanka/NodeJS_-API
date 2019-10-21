var  express = require('express');
var  app = express();
var  fs = require('fs');
var  path = require('path');

app.get(/^(.+)/,function(req,res){

	 try {
	 	if(fs.statSync(path.join(__dirname,'views',req.params[0]+'.html'))){
	        res.sendfile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
	         console.log("params is up");
         }	
        }
      catch(error){
	     res.sendfile('404.html',{root:path.join(__dirname,'views')});
           }
});

app.listen(8080,function(){
	console.log("server is up");
});