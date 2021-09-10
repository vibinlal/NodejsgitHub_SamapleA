var http = require("http")
var fs = require("fs")
var url = require("url")


http.createserver(function(req, res){
    var q= url.parse(req.url)

}).listen(7000,function(){
    console.log("server started")
})
