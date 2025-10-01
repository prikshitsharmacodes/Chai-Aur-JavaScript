// Primitive types
// Call by value hota , copy me changes hote
// 7 types : String , Number , Boolean , Null , Undefined , Symbol, BigInt

// Non-Primitve
// Reference Types 

//Array
// Object
// Functions

//  Javascipt is Dynamically Typed Language


const score =100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 25467870869758654n

const heros = ["shaktiman","naagraj", "doga"]

  let myObj = {
    name:"hitesh",
    age:22,
}

const myFunction =  function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber); // bigint

console.log(typeof outsideTemp); // object
