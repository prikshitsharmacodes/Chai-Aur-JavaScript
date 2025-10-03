function sayMyName(){
    console.log("Hitesh");
}

// sayMyName // reference => gives nothing
sayMyName() //execution


function addTwoNumbers(num1,num2){ // parameter
console.log( num1+num2)
}

const result = addTwoNumbers(1,3) // aruments
console.log(result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter an username");
        return
    }
    return `${username} just logged in`
}

const msg =loginUserMessage("Prikshit")
console.log(msg);

// jab koi argument ni bheje tho undefined hi aata hai




