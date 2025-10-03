// 2 ways to make objects

// literal -> multiple instance
// constructor -> singelton -> apni tarah ka ek hi hota

//  constrcutor Object.create()


// Object Literal


const mySym = Symbol("key1")

const JsUser ={
name:"Hitesh",
"full name":"Hitesh Choudhary",
[mySym]:"myKey1",
age: 18,
location:"Himachal Pradesh",
email:"hitesh@hmail.com",
isLoggedIn:false,
lastLoginDays:["Monday","Saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);

console.log(JsUser[mySym]);

console.log(typeof JsUser[mySym]);

// Changing value
JsUser.email="hitesh@chatgpt.com"

// freeezing the user

// Object.freeze(JsUser)


console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello JS User`);
}

console.log(JsUser.greeting); // function reference only no execution

console.log(JsUser.greeting());

JsUser.greeetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeetingTwo());