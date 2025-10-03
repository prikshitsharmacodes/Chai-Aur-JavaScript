// Arrow function

// this -> tells about current context

const user ={
    username:"hitesh",
    price:999,

    welcomeMessage: function (){
      console.log(`${this.username} welcome to website`); 
    //  console.log(this);   
    }
}


user.welcomeMessage()
console.log(this); // in node environment , this refer to empty object
// in browswer this refers to window
// user.username=="sam"

// console.log(user.username);
// user.welcomeMessage()


// this not used in function

function chai (){
    let username ="bawa"
    console.log(this.username);
}

chai()





// same for expression
const chaii  = function(){
    let name ="bawa"
    console.log(this.name);
}

chaii()



// arrow function
// same not used this 
const chaiii = ()=>{
    let username ="bawa"
    console.log(this.username);
}

chaiii()


const addTwo = (num1,num2)=>{
 return num1+num2
}

console.log(addTwo(3,4));



// Implicit return => No use of parathensis and return keyword

const addThree = (num1,num2) => num1+num2
const add = (num1,num2) => (num1 +num2)

//Returning object
const addd = (num1,num2) => ({username:"hitesh"})

const myArray =[1,2,3,4]
myArray.forEach(()=>{
    
})