const express = require('express')
const path = require('path')
const app =express()

app.listen(3000, function(){
    console.log(__dirname)
    console.log(__filename)
    console.log('server started')
})


app.get('/', function(req, res){

    res.send('hello')
})

//--------------------------

app.use(function(req, res, next){
    console.log('this will call before the path call')
    next()
})


app.get('/signuptest', function(req, res, next){
    res.sendFile(path.join(__dirname, 'SignupExpress.html'))
    next()
})

app.use(function(req, res){
    console.log('this will call after the path call and need to add a next in that method. then only it will call')
 
})

//-------------------------------------------

app.get('/signup', function(req, res){
    res.sendFile(path.join(__dirname, 'SignupExpress.html'))   
})

app.post('/signup', function(req, res){
    res.send('Account created')
})

app.get('/Contact', function(req, res){
    res.send('Contact')   
})

app.get('/about',(req,res)=>res.send('about'))