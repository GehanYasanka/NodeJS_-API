# NodeJS_-API
How to make a API use in NodeJS

NodeJS කියන්නෙ මොකද්ද?  NodeJS කියන්නෙ කියන browser එකෙන් එළියෙ
                      java script run කරන්න පුලුවන් වෙන්න හදපු 
                      runtime enviorament එකකට තමයි NodeJS කියන්නෙ.

Create recruitment :- This code is server
                     1. var  http = require ('http');
                     2. http.createServer(function(req,res){
                     3.      res.end("HelloWorld");
                     4.      }).listen(8080);
                     5.      console.log("Hari");

                    (Type the notepade & Save-- FileName.js)
                     Then open node panal
                     Go to this path    start-> search -> (type) node.js command prompt (open it)
                                        cd (Go to your FileName.js file path) then (type) node FileName.js (press Enter)
                                        open web browser type URL localhost:8080 now you can see "HelloWorld"

create module and call function :- මුලින්ම අපි කරන්න ඕන javascrit file දෙකක් හදාගන්න
                                   වෙනස්  Name දෙකකින් ඊට පස්සේ එක file එක තියෙන finction
                                   අනිත් file එකට access කරන්න පුළුවන් විදිහට හදන්න ඕන

              One a file Code (tute.js)

           1. var mod = require('./model');
				   2. var http = require ('http');
				   3. http.createServer(function(req,res){
  				 4.		res.end("HelloWorld");
				   5.		}).listen(8080);
				   6.		console.log("Hari");

      	   7.	 console.log(mod.myvar);
				   8.	 mod.func1();
				   9.	 mod.func2();
 			 	  10.    console.log(mod);
				  11.	 mod();			// not working it's for study function

				   Two a file Code (tute.js)

				  1. var myobj={};
				  2. myobj.func1 = function func1(){
				  3.	console.log('model_hari 1');
				  4.	}
				  5.  myobj.func2 = function func2(){
				  6.	console.log('model_hari 2');
				  7.	}
				  8.   myobj.myvar=5;
				  9.   module.exports=myobj;
				 10. function func3()		     // not working it's for study function
				 11.	{			     // not working it's for study function
				 12.	console.log('model_hari 3'); // not working it's for study function
				 13.	}                            // not working it's for study function
create nmp init and body-parser file:-Go to this path    start-> search -> (type) node.js command prompt (open it)
				      and type this comend (npm init)
						You can see this fill this form.
							package name: (projects) // type package name
							version: (1.0.0)	 // press Enter
							description:		 // type description about package
							entry point: (index.js)  // press Enter
							test command:		 // press Enter
							git repository:		 // press Enter
							keywords:		 // type any keywords
							author:			 // type author
							license: (ISC)           // press Enter

						then type this comend (npm install body-parser --save)
							package.json done

						Now install express framework
							then type this comend (npm install express --save)

Create another server using express framework:- *This code is another server*

					1. var  express = require('express');
					2. var  app = express();

					3. app.get("/",function(req,res){
						res.send("Hello From Express");
					4. });

					5. app.listen(8080,function(){
					6.	console.log("server is up");
					7. });

					start-> search -> (type) node.js command prompt (open it)
                                        cd (Go to your *FileName.js* file path) then (type) nodemon FileName.js
					(press Enter "Nodemon is auto refresh")
                                        open web browser type URL localhost:8080 now you can see "Hello From Express"
					
How to link Static File:- හරි දැන් අපි බලමු java script file file, css file, HTML file කොහොමද Nodejs link කරගන්නේ කියලා

			     මුලින්ම අපි බලමු  HTML file එකක් link කරගන්නෙ කොහොමද කියලා
			     මුලින්ම අපි ඉන්න file parth එකේ home.html file එකක් හදාගන්න ඕන
                             *This code is HTML*

			   1. <html>
			   2.	<head>
			   3.	 <link rel="stylesheet" type="text/css" href="mycssfile/style.css">
			   4.	</head>
			   5.	<body>
 			   6.	   <h1>this is my home page</h1>
  			   7.	     <form>
  			   8.	       <input>
  	                   9.             <button>Click me</button>
  			  10.	     </form>
			  11.	</body>
			  12.	</html>

			     අපි බලමු  css file එකක් link කරගන්නෙ කොහොමද කියලා

				*This code is css*

				1. input
				2. {
				3.	border-radius: 5px;
				4. }
				5. button
				6. {
				7. border-radius: 5px;
				8. color: aliceblue;
				9. background-color: blue;
				10. }

දැන් තමයි අපි server file (link Static File) එක හදන්න යන්නේ:-
                               හරි දැන් අපි link static file එකට මේ Html file එක සහ css file එක link කරගමු.

			       *This code is server (link Static File)*

				1. var  express = require('express');
				2. var  app = express();
				4. 
				5. app.use('/mycssfile',express.static(__dirname+'/css'));
				6.
				7. app.get("/",function(req,res){
				8.	res.sendfile('home.html',{root:__dirname});
				9. });
				10. 
				11. app.listen(8080,function(){
				12. 	console.log("server is up");
				13. });

				මේ තියෙන්නෙ 5 line එකෙන් තියෙන්නෙ css file එක තියෙන folder  එකට ගිහින් ඒක link කරල තියෙන එක

				මේ 8 line එකේ තියෙන්නේ Html file එක link කරලා තියන එක ඒකට යොදාගෙන තියෙන්නෙ root කියන keyword එක
