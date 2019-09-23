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
