const score =400
 // Explicit descirbing its Number
const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length); //3

console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.7866
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// +++++++++ Maths +++++++++

console.log(Math.abs(-8)); // absolute
console.log(Math.ceil(4.2)); // zara sa bi 4 se jada tho top ki value 5
console.log(Math.floor(4.2)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.2));



console.log(Math.min(1,2,3,4)); // 1

console.log((Math.random() * 10) + 1);


const min = 10;
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min) 