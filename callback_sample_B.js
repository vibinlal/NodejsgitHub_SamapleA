// FUNCTION Return multiple values by callback and result is used for another function

function Add(num1, num2, callback)
{
    let err= false;
    let value = num1+ num2
    if(num1==0)
    {
        err=true
    }
    callback(value, err)
}

function Multiply(num1, num2, callback)
{
    callback(num1*num2)
}

function Divide(num1, num2, callback)
{
    callback(num1/num2)
}

// will return divided result
Divide(10,2,(dividevalue)=>{
    console.log(dividevalue)
})



Add(10,10,(sum,errvalue)=>{
    console.log(sum)
    console.log(errvalue)
    
    Multiply(sum, sum,(multiplyvalue)=>{
        console.log(multiplyvalue)

        Divide(multiplyvalue,3,(dividevalue)=>{
            console.log(dividevalue)
        })
    })
})

