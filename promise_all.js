const promise = require('promise')



function GetName()
{
    return new promise((resolve, reject)=>{
       setTimeout(() => {
            resolve('vibin')
       }, 3000);
    })
}

function GetMobile()
{
    return new promise((resolve, reject)=>{
       setTimeout(() => {
            resolve('8089844425')
       }, 3000);
    })
}

promise.all([GetName(),GetMobile()]).then((result)=>{
    console.log(result)
})

function getUser()
{
    let name =GetName()
    console.log(name)
}
getUser()

function getUser2()
{     
    GetName().then((Name)=>{
        console.log(name)

    }).catch((err)=>{
        console.log(err)
    })
}

getUser2()
async function getUser3()
{
    let name = await GetName()
    console.log(name)
}

getUser3()


