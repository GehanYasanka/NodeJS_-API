var express = require('express');
var app = express();
var router = express.Router();

app.use('/firstrout',router);

router.get('/',function(req,res){
	res.end("This is First Advance Routing");
});

router.get('/root1',function(req,res){
	res.end("This is Root 1");
});

router.get('/root2',function(req,res){
	res.end("This is Root 2");
});

app.listen(8080,function(){
	console.log('Server is up');
});