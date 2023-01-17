// Require http header

// Require http module returns a Js type depending on what the particular module returns
var http = require("http");   
  
// Create server 
http.createServer(function (req, res) {   
   
    // Send the HTTP header    
    // HTTP Status: 200 : OK   
    // Content Type: text/plain   
    res.writeHead(200, {'Content-Type': 'text/plain'});   
     
    // Send the response body as "This is the example 
    // of node.js web based application"   
   res.end('This is the example of node.js web-based application \n');   
  
// Console will display the message   
}).listen(5000,  
    ()=>console.log('Server running at http://127.0.0.1:5000/'));

   // simple calculating module that calculates various operations
   // this file provides attributes to the outer world via exports, another file can use its exported functionality using the require() function
    var calculator = require('./calc'); 
    
    var x = 50, y = 10; 
        
    console.log("Addition of 50 and 10 is "
                       + calculator.add(x, y)); 
        
    console.log("Subtraction of 50 and 10 is "
                       + calculator.sub(x, y)); 
        
    console.log("Multiplication of 50 and 10 is "
                       + calculator.mult(x, y)); 
        
    console.log("Division of 50 and 10 is " 
                       + calculator.div(x, y));    
// we import our local module ‘sayHello’ in a variable ‘local’ and consume the function and variables of the created modules.
var local = require("./welc.js");
local.sayHello();
console.log(local.currTime);
console.log(local.companyName);                       