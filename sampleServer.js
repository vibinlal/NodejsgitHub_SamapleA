var http = require('http')
var fs = require("fs")
var url = require("url") 


http.createServer(function (req, res) {

    var q=url.parse(req.url,true)
    console.log(q.pathname)

   if(q.pathname==='/')
   {   
        fs.readFile('samplehtml.html',function(err,hai){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(hai)
            res.end()
        })

   }
   else if(q.pathname==='/signup')
   {
        fs.readFile('Signup.html',function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end()
        })

   }
   else if(q.pathname==='/signupAction')
   {
        console.log(q.query)        
        res.write(q.query.fName)
        res.end()    

   }
   else 
   { 
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("error")
        res.end()

   }

}).listen(7000,function(){
    console.log("server started")
}) 

/*
http.createServer(function (req, res) {
   if(req.url==='/')
   {   
        fs.readFile('samplehtml.html',function(err,hai){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(hai)
            res.end()
        })

   }
   else if(req.url==='/signup')
   {
    fs.readFile('Signup.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        res.end()
    })

   }
   else 
   { 
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("error")
        res.end()

   }

}).listen(7000,function(){
    console.log("server started")
}) 

*/

/* 
//Arrow function used in listen
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hi')
    res.end()

}).listen(7000,()==> console.log("server started")
) 

*/

/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hi')
    res.end()

}).listen(7000,function(){
    console.log("server started")
}) 
*/

/*
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(7001);
*/

/*
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hi');

}).listen(7002,function(){
    console.log("server started")
}) 
*/


/* 

http.createServer(server).listen(7003);
function server(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hi')
    res.end()
}

*/
