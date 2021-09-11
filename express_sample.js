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

app.get('/signup', function(req, res){
    res.sendFile(path.join(__dirname, 'SignupExpress.html'))
})

app.post('/signup', function(req, res){
    res.send('Account created')
})


app.get('/about',(req,res)=>res.send('about'))