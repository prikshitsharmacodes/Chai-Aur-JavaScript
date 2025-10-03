// singelton obj
// const tinderUser = new Object()

const tinderUser ={

}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}



// console.log(regularUser.fullname.userfullname.firstname);


// Combining objects

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}
// const obj3 = {obj1,obj2} // obj ke andr obj
// const obj3 =  Object.assign({},obj1,obj2,obj4) // { }optional parameter , to put all in that obj 

// using spread

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);


// database se values


const users =[
    {
        id:1,
        email:"bawa@gmail.com"
    },
    {
        id:2,
        email:"bawa2@gmail.com"
    },
    {
        id:3,
        email:"bawa3@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true