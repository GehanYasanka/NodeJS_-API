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
				  11.	 mod();			// not working it's for study functi

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
				
How to create Url Routing :-Url Routing කියන්නේ localhost:8080 මේකෙන් පස්සෙ "/" ඒක එක ඇතුලට යනවා
			    ගිහින් ඒ folder Open වෙන්නෙ කොහොමද කියල... 
			           උදාහරණයක් විදියට (localhost:8080/file1)

			          මේකෙත් කලින් විදියමයි Server එකක් හදන්න ඕන

				*This code is server (Url Routing)*

				1. var  express = require('express');
				2. var  app = express();
				3. var  fs = require('fs');
				4. var  path = require('path');
				5. 
				6. app.get(/^(.+)/,function(req,res){
				7. 	res.sendfile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
				8. 	console.log("params is up");
				9. });
				10.
				11. app.listen(8080,function(){
				12.	console.log("server is up");
				13. });

				String එක පටන් ගන්න (/^(.+) /) ඕන මේ code එකෙන්,
				String එකක් හෝ ඊට වැඩි ප්‍රමාණයක් (6 line)
				
				අපි යවන request එක parametre එකක් විදිහට params කියන keyword එක zero වෙනි index1 විදියට තියෙන්නෙ
				(7 වෙනි line එකෙ)
				අපි මේකෙ file path එක ලේසි වෙන්න path කියන object එක පාවිච්චි කරනවා.(4 line)

Now create HTML fils inside views folder:-
					හරි දැන් අපි බලමු views කියන Folder එක අතුලෙ file1.html , file2.html කියන file ,දෙකක් හදල
					 ඒ දෙක UrlRouting කියන server File එකට link කරන්නෙ කොහොමද කියල
					*Ones a file Code (file1.html)*

						1. <!DOCTYPE html>
						2. <html>
						3. <head>
						4.	<meta charset="utf-8">
						5.	<title>Documents</title>
						6. </head>
						7. <body>
						8. This is File 1
						9. </body>
						10. </html>

					*Secound a file Code (file2.html)*

						1. <!DOCTYPE html>
						2. <html>
						3. <head>
						4.	<meta charset="utf-8">
						5.	<title>Documents</title>
						6. </head>
						7. <body>
						8. This is File 2
						9. </body>
						10. </html>

how to error handling using (try, catch):- හරි දැන් අපි බලම users වැරදිල වෙනස් file path එකක් දුන්නොත්.
					        ඒ වැරැද්ද try catch method එක use කරල handel කොහොමද කියල

					        කලින් code ඒකම තමයි ඒත් මේ (8-16 line) ට්කට try catch add වෙන්න ඕනේ (UrlRouting.js)

					1. var  express = require('express');
					2. var  app = express();
					3. var  fs = require('fs');
					4. var  path = require('path');
					5. 
					6. app.get(/^(.+)/,function(req,res){
					7. 
					8. 	 try {
					9. 	 	if(fs.statSync(path.join(__dirname,'views',req.params[0]+'.html'))){
					10. 	        res.sendfile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
					11. 	         console.log("params is up");
					12.          }	
					13.        }
					14.       catch(error){
					15.	     res.sendfile('404.html',{root:path.join(__dirname,'views')});
					16.           }
					17. });
					18.
					19. app.listen(8080,function(){
					20. 	console.log("server is up");
					21. });

					දැන් අපි HTML file එකක් හදාගෙන වැරදියට input කරාම ඒ file එක පෙන්න විදියට හදන්න ඕන
					(404 කියල error එකක්)

					  *This code is 404.html*

						1. <!DOCTYPE html>
						2. <html>
						3. <head>
						4.	<meta charset="utf-8">
						5.	<title>Documents</title>
						7. </head>
						8. <body>
						9. File not found
						10.</body>
						11.</html>

How to GET & POST request in applicatin:-හරි අපි දැන් බලමු URL එකේ GET request එකේ  එන parameters එවන්නේ කොහොමද කියල
                                         මුලින්ම අපි URL එකෙ මෙහෙම type කරන්න ඕන localhost:8080/?name=gehan 
					   මේකෙ (?) mark (? Mark එකෙන් පස්සේ තියෙන දේවල් parameters)
					   එකෙන් පස්සේ name කියන parameters එකට gehan කියන එක සමාන කර ගත්තා

හරි අපි දැන් බලමු get request එකේ එවන parameters කොහොමද අල්ලගන්නේ කියල:-

						1. var  express = require('express');
						2. var  app = express();
						3. var  fs = require('fs');
						4. var  path = require('path');

							//app.use(bodyparse());

						5. app.use('/mycssfile',express.static(__dirname+'/css'));
						6. app.get("/",function(req,res){
						7.	res.sendfile('home.html',{root:__dirname});
						8.	res.send("my name is"+JSON.stringify(req.query.name));
						9. });

						10. app.listen(8080,function(){
						11.	console.log("server is up");
						12.});

						මේකෙ 8 line එකේ තියෙන්නේ අපි කොහොමද එවපු get request එක අල්ල ගත්තේ කියල 
						අපේ URL එකේ එන data ටික එන්නේ request එකක් විදියට මේකේ req කියල req.query කියල 
						අපි URL එකේ (?) පස්සේ එන data අල්ල ගන්නේ query කියන keyword එකෙන්
						 මේකේ JSON.stringify කියල තියෙන්නේ එන දට එක string එකක් විදියට හදාගෙන 

						අපිට ඕන නම්  req.query එකෙන් අපි data ටික අල්ල ගත්ත නිසා
						MySQL query ගහන්න වගේ Database වැඩවලට පාවිච්චි කරන්න පුළුවන් 


					අපි දැන් බලමු home.html එක හරහා කොහොමද post request එකක් අරන් back-end එකට් යවන්නේ කොහොමද කියල

					අපි දැන් බලමු home.html එක හරහා කොහොමද post request එකක් අරන් back-end එකට් යවන්නේ කොහොමද කියල
						එකට අපි දමේ HTML code එක ගහන්න ඕනෙ අපි link කරපු home.html file එකේ 

						1. <html>
						2. <head>
						3.	<link rel="stylesheet" type="text/css" href="mycssfile/style.css">
						4. </head>
						5. <body>
						6. <h1>this is my home page</h1>
						7.  <form action="/user" method="post">
						8.  	<input name="username">
						9.  	<input name="lastname">
						10.
						11.  	<button type="submit" >Click me</button>
						12.  </form>
						13. </body>
						14. </html>

						මේකේ  <form action="/user" method="post"> (6 line) හදා ගන්න ඕනේ 


අපි කලින් එකේදී ගත්හේ URL එක:- එත් අපි මේකෙදි post  method එක නිසා  req.query කියන එක වෙනස් කරනවා req.body විදියට (14 line)
			     අපි HTML file එකේ ගත්ත <input name="username"> කියන variable එක මෙතනට දන්නා ඕනේ පස්සේ ඒ දෙක "/user" කියල
			     අලුතින් හදාගත්ත root එකේ display කරන්න ඕනේ ඒ code එක තම මේ (14 line) වලින් තියෙන්නේ 

get request එකේ data එවන්නේ කොහොමද කියල :-URL එකේ උනාට post request එකේ එවන්නේ body එකේ එකට අපි අලුතින් app.use(bodyparse());
				            කියල middle-ware import කර ගන්න වෙනවා (5,6 line)
					    import කර ගත්තට පස්සේ අපිට post request එකත් මේ විදියටම හදන්න පුළුවන් (12-15 line)
					          
				1. var  express = require('express');
				2. var  app = express();
				3. var  fs = require('fs');
				4. var  path = require('path');
				5. var  bodyparser = require('body-parser');

				6. app.use(bodyparser());

				7. app.use('/mycssfile',express.static(__dirname+'/css'));
				8. app.get("/",function(req,res){
				9.	res.sendfile('home.html',{root:__dirname});
				10.	//res.send("my name is"+JSON.stringify(req.query.name));
				11. });
				12. app.post("/user",function(req,res){
				13.	res.sendfile('home.html',{root:__dirname});
				14.	res.send("my name is"+JSON.stringify(req.body.username)+""+JSON.stringify(req.body.lastname));
				15. });

				16. app.listen(8080,function(){
				17.	console.log("server is up");
				18. });
				
හරි අපි බලමු advanced routing ගැන එකෙත් කලින් විදියමයි මං එක code එකෙන්ම විස්තර කරනම්

				1. var express = require('express');
				2. var app = express();
				3. var router = express.Router();

				4. app.use('/firstrout',router);

				5. router.get('/',function(req,res){
				6.	res.end("This is First Advance Routing");
				7. });

				8. router.get('/root1',function(req,res){
				9. 	res.end("This is Root 1");
				10. });

				11. router.get('/root2',function(req,res){
				12. 	res.end("This is Root 2");
				13. });

				14. app.listen(8080,function(){
				15. 	console.log('Server is up');
				16. });

			අපි මේකෙදි express වලතියෙන router කියන function එක import කරගන්නවා (2 line)
			අපිට මේ firstroute කියන එකට එන request  ටික එක route එකකින් Handel කරන්න ඕනේ නම්
			අපි මේක අපි router එකක් define කරනවා
			app.use('/firstrout',router); (4 line) මේ විදියට මේකෙන් කියන්නේ /firstrout කියන URL එකට එන request ඔක්කොම 			  router බාරදෙන්න කියල
			(GET හෝ  POST ඕනෙම  request එකක්)
			කලින් default root  එකට අපු request දැන් /firstrout මේකට තම්යි default එන්නේ
			එක තමි අපි කරලා තියෙන්නේ (5,6 line)
			අපිට මේ (8-10 & 11-12 line) තියෙන එක තේරුම් ගන්න පුළුවන් 
			මේ විදියට URL output එකකින් http://localhost:8080/firstrout/root1
			
මේකෙදි අපි බලමු  sessions වලින් වදාගන්නේ කොහොමද කියල:- සහ simple login system එකක් හදා ගන්නේ කොහොමද කියල
						      මුලින්ම අපි login page එකක් හදාගන්න ඕනේ HTML වලින් 

						(login.html)
						1. <form action="/login" method="post">
						2.	<input type="username" name="username" placeholder="username">
						3.	<input type="password" name="password" placeholder="password">
						4.	<button type="submit" > Login </button>
						5. </form>

අපි දැන් මේ හදාගත්ත form එක open කරගන්න ඕනේ server එකේ එකට කලින් විදියමයි code එක

						1. var express = require('express');
						2. var app = express ();
						3. var bodyparser = require ('body-parser');
						4. app.use(bodyparser());

						5. app.post('/login',function(req,res){

						6.	if(req.body.username == 'admin' && req.body.password == 'admin')
						7.	{
						8.		res.send("Welcome To Admin");
						9.	}
						10.	else
						11.	{
						12.		res.send('Invalid Username Or Password');
						13.	}
						14. });

						15. app.listen(8080,function(){
						16.	console.log("server is up");
						17. });
අපි මේකේ default URL එක විදියට අපි දීල තියෙන්නේ HTML form එක open වෙන්න(5 line)
අපිට මෙතන login කියන request එක අවහම මෙන්න මේ function එක කරන්න (6 - 12 line)

(6 line) එකෙන් කියවෙන්නේ if condition එකක් ඇතුලේ user enter කරපු data හරිද කියල බලන එක 
                                                                                                                                    (අපිHTML form එකෙන් ගත්තු username, password දෙක admin කියන එකට සමාන වෙනවද බලන එක)
එහෙම සමාන වෙන්නේ නැත්තන් (12 line) එකේ තියන msg එක පෙන්නන්න ඕනේ 

හරි අපි මේ කර විදියට login වෙන්න පුළුවන්:-හැබැයි අපි මේ page එක අයිමත් load ක‍රකොට අපිට නැවතත්  username, password input කරන්න වෙනවා
				      මේ වැඩේ තේරුමක් නැති නිසා තමයි sessions use කරන්නේ sessions එක පවිච්චිකාරක දිගටම login එකෙන් තියගන්න 

අපි දැන් බලමු කොහොමද එක කරන්නේ කියල:- 
					*මේකෙදි express.session කියල library එකක් තියෙනවා එක import කරන ඉන්න ඕනේ(4 line)

					*අපි මේ import ගත්තු library එක use කරන්න ඕනේ (7 line)

					*අපි මේ (5 line) එකේ හද ගත්තු session variable එකට අපේ data ටික දා ගන්නේ

					*request එකේ තියෙනවා sessions කියල object එකක් (25 line) 
					   අපි මේ variable එකක් විදියට ගත්තට, assign කාරනකොට object එකක් වෙනවා

					*අපි මේ හද ගත්ත object එකෙන් හදනවා attribute එකක් session.userid=req.body.username;
					  මේ විදියට හදාගත්ත session.userid එක සමාන කරනවා req.body.username කියන එකට(26 line)

					*sessions variable එක සමාන වෙන්නේ session.userid කියන එකට(26 line)

					*අපි මේ sessions එක use කරන ඕනේ (7-9 line) sessions එක use කරලා
					 data ටික තිය ගත්ද්දී encryption කරන්න ඕන එක තමයි මේ කරලා තියෙන්නේ

					*(12 line) එකේ sessions එකක් සෙට් වෙලා නම් අපි බලන්න ඕනේ කෙලින්ම login එකට යවන්නේ නැතුව
					  sessions එකක් තියෙනවද කියල 
					   එක තමයි මේ කරල තියෙන්නේ එකේදී අපි බලනවා if condition  එකක් දල  මේක අපේ sessions එකට
					   අල්ලාගෙන ඉන්න ඕනේ (11 line)
 
					*එක දැන් සමාන කරන්න කියනවා session.userid කෙනෙක් ඉන්නවා නම් ඒ කියන්නේ අපි කලින් හදාගත්තු
					 session.userid=req.body.username
					 attribute එක (26 line) හැදිලා තියෙනවා නම් ඒ කියන්නේ අපි කලින් login වෙල තියෙනවා එහෙනම්
					 අපිට කරන්න තියෙන්නේ log උනාට පස්සේ පෙන්නන "Welcome To Admin" මේ msg එකම පෙන්නන
				 	 එහෙම නැත්තන්  (15-16 line) else එකකින් මේක පෙන්නන

					*දැන් අපිට මේ link එකෙන් එලියට යන්න බෑ

					*අපි දැන් හද ගන්න ඕනේ logout වෙන්න එහෙම නැත්තන් link එක destroy වෙන්න function එකක් 

					*එකට අපි මෙහෙම කරන්න ඕනේ res.send("Welcome To Admin <a href=\'/logout'> Click logout </a>");
					 href  එකක් ඇතුලේ logout කියල URL එකට යන්න කියනවා (13 line) & (27 line)

					*දැන් අපිට තියෙන්නේ logout කියන එක request එක Handel කරන්න rout එකක් ලියන්න

					*එක අපි කරන්නේ මෙහෙමයි (18-21 line) req.session.destroy();link එක destroy වෙනවා
					මේ line එකෙන් පස්සේ අපි මේක redirect කරන්න ඕනේ නැත්තන් වෙන තැනක link කරන්න ඕනේ
					root page එකට res.redirect('/'); එක තමි අපි මේ කරලා තියෙන්නේ 

			Finel Code:-
					1. var express = require('express');
					2. var app = express ();
					3. var bodyparser = require ('body-parser');
					4. var sessions = require ('express-session')
					5. var session;
					6. app.use(bodyparser());
					7. app.use(sessions({
					8.	secret:'@G>+<+3d#@$Df2>+<3#R43f2>+<3ds'
					9.  }));
					10. app.get('/',function(req,res){
					11.	session=req.session;
					12.	if(session.userid){
					13.		res.send("Welcome To Admin <a href=\'/logout'> Click logout </a>");
					14.	}
					15.	else
					16.		res.sendfile('login.html',{root:__dirname});
					17. });
					18. app.get('/logout',function(req,res){
					19.	req.session.destroy();
					20.	res.redirect('/');
					21. });
					22. app.post('/login',function(req,res){
					23.	if(req.body.username == 'admin' && req.body.password == 'admin')
					24. 	{
					25.		session=req.session;
					26.		session.userid=req.body.username;
					27.		res.send("Welcome To Admin <a href=\'/logout'> Click logout </a>");
					28.	}
					29.	else
					30.	{
					31.		res.end('Invalid Username Or Password');
					32.	}
					33. });
					34. app.listen(8080,function(){
					35.	console.log("server is up");
					36. });
හරි දැන් අපි බලමු MySql use කරලා backend එකේ data use කරන්නේ කොහොමද කියල:-

					* එකට අපිට කලින් විදියටම server එක up කරගන්න (1,2 line)&(16-19 line) ඕනනේ express import කරගන්න ඕනේ

					* මේකෙදි අපි තව වැඩිපුර දෙයක් කරන්න ඕනේ අපි MySql use කරන නිසා එක import කරගන්න ඕනේ (3 line)

					* ඊට කලින් එක install කරගන්න ඕනේ NodeJs cmd එකේ මේ commend එක ගහල npm i mysql --save

					* ඊට පස්සේ අපි xampp server එක run කරලා connection එක හද ගන්න ඕනේ එකට මේ (4-10 line) තියෙන විදියට

					1. var express = require('express');
					2. var app = express();
					3. var mysql = require('mysql');

					4. app.get('/',function(req,res){
					5.  var con = mysql.createConnection({
					6.  	host:'localhost',
					7.  	user:'root',
					8.  	password:'',
					9.  	database:'test'
					10.  });
					11.  con.query("SELECT * FROM student",function(err,result){
					12.		if(err) throw err;
					13.		console.log(result);
					14.  });
					15. });

					16. app.listen(8080,function(){
					17.	console.log("Server is up");
					18.	console.log("listen to port 8080");
					19. });	

					* අපි connection එක හදාගත්තට පස්සේ අපිඅට අදාල query එක හදා ගන්න (11 line)

					* අපි query එක ලියන්න ඕනේ con.query("SELECT * FROM student",function(err,result)

					* මේකේ function(err,result) error එකක් අවොත් මෙන්න මේ පලවෙනි argument එක තමයි වෙන්නේ

					* ඊට පස්සේ result එක දෙවනියට තියෙන එකට pass වෙනවා

					* ඊට පස්සේ අපිට මේක function එකක් විදියට ඇරගන්න ඕනේ (12,13 line)

					* ඇරගන්න error එකක් තිබ්බොත් error එක throw කරන්න කියල (12 line) 

					* එහෙම නැත්තන් console.log(result); අපේ database එකෙන් එන result එක මේකෙන් print වෙනවා(13 line)

අපි මේකේ කරන්න යන්නේ MySQL වලින් ගත්ත data ටික කොහොමද HTML file එකකට send කරන්නේ කියල
					*එකට අපි කලින් code එකම ගන්න  ඕනේ එකේ පොඩි වෙනසක් කරන්න ඕනේ ඒ තමි අපි connection එක හදපු එක 					     listen එක ඇතුලේ දන්නා ඕනේ
					
					*එකට අපි උඩින්ම global variable එකක් අරන් එක define කරන ඉන්න ඕනේ පස්සේඑකට සමාන කරන්න ඕනේ මේ 					      විදියට
					
					app.listen(8080,function(){
   				        con = mysql.createConnection({
  					host:'localhost',
   					user:'root',
  					password:'',
   					database:'test'
  					});

					*server එක start කරන වෙලාවෙම connection එකත් start කරලා හදාගත්තු global variable එකට දාගෙන 					     ඉන්නවා අපිට ඕනේ වෙලාවක use කරන්න පුළුවන් වෙන්න

					*දැන් අපිට තියෙන්නේ අපි හදපු HTML form එකට යව ගන්න
					
					*හරි අපිට දැන් මේකෙදි express template engine ටිකක් පාවිච්චි කරන්න වෙනවා ඊට කලින් එක install කරගන්න 					     ඕනේ install මේ commend එකෙන්
					 (npm install handlebars --save කියන එකෙන්)

					*අපි මේකෙදි handlebars template engine එක තමයි use කරන්නේ

					*එක install කරලා අපි import කරගන්න ඕනේ (4 line)

					*ඊට පස්සේ අපිට මේ handlebars වල වැඩ කරද්දී folder structure එකක් තියෙනවා අපි එක හදාගන්න ඕනේ එකට 					අපි ඉන්න folder එකේ තව views කියල folder එකක් හද ගන්න ඕනේ එක ඇතුලේ layouts කියල තව folder 					  එකක් හදාගන්න ඕනේමේක handlebars වල අනිවාර්යයෙන් කරන්න ඕනේ දෙයක්
					   අපි මේ අන්‍තීමට  හදාගත්තු layouts කියන folder එක ඇතුලේ  main.handlebars කියල file එකක් හදාගන්න 						ඕනේ එකේ අපි මේ code එක ගහන්න ඕනේ
					
						<html>
 						  <bod>
  						   {{{body}}}
 						  </bod>
						</html>

					*මේකේ html වෙනුවට පාවිච්චි වෙන්නේ handlebars තමයි මේ file එක ඇතුලේ තමයි මෙය views පෙන්නන හදන්නේ

					*එතකොට මෙන්න මේ {{{body}}} කියන එකට තමයි අපි එවන්නේ අපේ file එක එතකොට එයා එක replace කර ගන්නවා

					*හැමතිස්සෙම අපිට main.handlebars එක තමයි අපිට පෙන්නනේ

අපේ views ඔක්කොම අපි හදන්නේ අපි කලින් හද ගත්තු views කියන folder එකේ එකේ අපි හද ගන්න ඕනේ student.handlebars කියල file එකක් එකේ ඇතුලේ මේ code එක ගහන්න ඕනේ

					1. <html>
					2.   <head>
					3.    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
					4.   </head>
					5.    <body>
					6.      <center>
					7.        <h1>Student Details</h1>
					8.        <table class="table">
					9.          <tr>
					10.            <th>Index No</th>
					11.            <th>Fname</th>
					12.            <th>Lname</th>
					13.            <th>Tel</th>
					14.          </tr>
					15.          <tbody>
					16.            {{#each result}}
					17.            <tr>
					18.              <td>{{this.IndexNo}}</td>
					19.              <td>{{this.Fname}}</td>
					20.              <td>{{this.Lname}}</td>
					21.              <td>{{this.Tel}}</td>
					22.            </tr>
					23.            {{/each}}
					24.          </tbody>
					25.        </table>
					26.      </center>
					27.    </body>
					28.</html>

						*හරි දැන් අපිට body එක ඇතුලේ හද ගන්න ඕනේ (17-22 line)

						*මේකෙදි න අපි (16 line) වල {{#each result}} තියෙන එකේ අපි මේ # ලකුණ ඉස්සරහින් දන්නේ keyword එකක් නම් තමයි

						*මේ  each කියන එක for එකක් වගේ මේ *result* එක අපිට හදාගන්න ඔනේ අපේ server file එක එක අපි ඉස්සරහට බලමු.

						*ඊට පස්සේ මේ result එකේ තියෙන එක row එකක් ගනේ මෙය run වෙන්න ගන්නවා (18-21 line)

						*හරි අපි දැන් table data දන්නා මේ table data එකක් කියන්නේ variable එකක
						ඒ කියන්නේ this.IndexNo කියන්නේ අපේ Mysql data table එක row name එකක් ඒ වගේ අනිත් ඒවත් 							හදල තියෙනව ඒ ඒ database row වලට අදාල(- line)

හරි අපි දැන් බලමු අපි අපේ server file එක හදාගන්න

					1. var express = require('express');
					2. var app = express();
					3. var mysql = require('mysql');
					4. var handlebars = require('express-handlebars');
					5. var con;
					6. app.engine('handlebars',handlebars({defaultLayout:'main'}));
					7. app.set('view engine','handlebars');

					8. app.get('/',function(req,res){
					9.  con.query("SELECT * FROM student",function(err,result){
					10.		if(err) throw err;
					11.		console.log(result);
					12.    res.render('student',{
					13.      result:result
					14.    });
					15.  });
					16. });

					17. app.listen(8080,function(){
					18.     con = mysql.createConnection({
					19.     host:'localhost',
					20.     user:'root',
					21.     password:'',
					22.     database:'test'
					23.   });
					24.	console.log("Server is up");
					25.	console.log("listen to port 8080");
					26. });

					*අපි handlebars එක install කරලා import කරගත්තට පස්සේ අපිඅට handlebars engine එකක් හද ගන්න ඕනේ(4 line)

					*මෙකෙඉදි මේ(6 line) එකේ තියෙන පළවිනි handlebars කියන එක variable එකක් එකට ඕනෑම වචනයක් දෙන්න පුළුවන්
					මේ (6 line)එකේ දෙවනියට තියෙන handlebars කියන එකෙන් කරලා තියෙන්නේ handlebars object එක use කරන එක එකේදී අපි දෙන්න ඕනේ defaultLayout එක මොකද්ද කියල 
					එකට අපි කලින් හද ගත්තු views කියන folder එක අත්ලේ හදපු Layouts folder එකේ  main.handlebars කියන file  එක දෙන්න ඕනේ (6 line)
					මොකද එකෙන් තමයි අපි හදන ඔක්කොම views run වෙන්නේ

					*හරි ඊට පස්සේ අපි views engine එක set කරන්න ඕනේ එකට අපි මේ code එක ගහන්න ඕනේ app.set('view engine','handlebars'); (7 line)
					මේකෙදි handlebars කියන එක මං කලින් කිව්ව (6 line) එකේ පළවිනි handlebars කියන එක variable එකට සමාන වෙන්න
			
					*ඕනේ හරි අපි දැන් engine හදල ඉවරයි

					*හරි දැන් අපි අපේ file එක යවන්න ඕනේ එකට අපි මේ code එක ගහන්න ඕනේ

					*res.render('student') මේකේ render කියන්නේ function එකක් අපි render කරන්න කියනවා අපි කලින් හදපු views folder එක තියෙන student.handlebars කියන file එක
						මේකෙදි  res.render('student',{
     							 result:result
   						        });

					*අපි data යවන්නේ object එකක් විදියට ඒ data ඇතුලේ තියෙනවා

					*අපි මෙතන result:result (13 line) එකේ result කියන variable name එක තමයි pass වෙන්නේ

					*අපිට result වෙනුවට ඕනෙම variable name එකක් දන්නා පුළුවන්.

					*හරි දැන් run කරන්න පුළුවන් අපේ database එකෙන් ගත්තු data ටික backend එකෙන් අරගෙන UI එකට pass කරන්න පුළුවන්.
