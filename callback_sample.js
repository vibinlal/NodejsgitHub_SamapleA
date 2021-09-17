//Arrow function start
var hellow1=(data)=>{
    console.log('data : ' + data)
}
//Arrow function End


var hellow = function(data){
    console.log('data : ' + data)
}

var hey =function(callback)
{
    callback('CrossRoads')
}


hey(hellow)

hey(hellow1)
