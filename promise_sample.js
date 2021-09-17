// function Add(num1, num2, callback)
// {
//     let err= false;
//     let value = num1+ num2
//     if(num1==0)
//     {
//         err=true
//     }
//     callback(value, err)
// }

// function Multiply(num1, num2, callback)
// {
//     callback(num1*num2)
// }

// function Divide(num1, num2, callback)
// {
//     callback(num1/num2)
// }

// Add(10,10,(sum,errvalue)=>{
//     console.log(sum)
//     console.log(errvalue)

//     Multiply(sum, sum,(multiplyvalue)=>{
//         console.log(multiplyvalue)

//         Divide(multiplyvalue,3,(dividevalue)=>{
//             console.log(dividevalue)
//         })
//     })
// })
//----------------------------

const promise = require('promise')


function AddPromise(num1, num2)
{
    return new promise((resolve, reject)=>{
        if(num1==0)
        {
            reject('Error')
        }
        resolve(num1+num2)
    })
}
function MultiplyPromise(num1, num2)
{

    return new promise((resolve, reject)=>{  
        if(num1==0)
        {
            reject('Error 2')
        }      
        resolve(num1+num2)
    })
}

// AddPromise(0, 20).then((sum)=>{
//     console.log(sum)

// }).catch((err)=>{
//     console.log(err)
// })


AddPromise(20, 20).then((sumPromisevalue)=>{
    console.log(sumPromisevalue)
    return MultiplyPromise(sumPromisevalue,sumPromisevalue)

}).then((multiplyPromisevalue)=>{
    console.log(multiplyPromisevalue)
   // console.log(sum)

}).catch((err)=>{
    console.log(err)
})

