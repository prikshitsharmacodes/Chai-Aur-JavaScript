
 // using rest operator
 // val1 -> 200
 // val2 -> 400
 // num2 -> 500,1000
function calculateCartPrice(val1,val2,...num1){
  return num1
}

console.log(calculateCartPrice(200,400,500,1000))

const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyObject){
console.log(` username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username:"sam",
    price:399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
return getArray[1]
}

console.log(returnSecondValue(myNewArray));