// Array

const myArr = [0,1,2,3,4,5]

console.log(myArr[0]);

// shallow copy => reference
// deep show > share no reference

const myHeros =["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

// Array Methods

myArr.push(6) // adding at last
myArr.push(7)
myArr.pop() // last value ko remove
myArr.unshift(9) // array ke start me add
myArr.shift() // array ke start se delete kr deta
console.log(myArr); 

console.log(myArr.includes(9)); // false

console.log(myArr.indexOf(9)); // -1 haina ni pata

console.log(myArr.indexOf(3));


const newArr = myArr.join() // array ko bind + string kr deta

console.log( typeof newArr);
console.log(myArr);



// slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);



console.log("A ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("B",myArr);


// Diff bw slice splice
// slice dont include last range but splice do
// slice dont change orginal array
// splice do manipulate the original array