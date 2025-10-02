// Dates

let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); // object

const myCreatedDate = new Date(2025,9,1)
console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(myCreatedDate.getFullYear());

// converting to seconds

console.log(Math.floor(Date.now()/ 1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());


newDate.toLocaleString('default',{
    weekday:'long'
})