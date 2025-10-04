// Array specific loop

const arr = [1,2,3,4,5]

// For-of 
for(const num of arr){
console.log(num);
}

const greetings ="Hello World!"
for (const greet of greetings) {
console.log("Each Char is "+ greet);    
}

// MAPS =>  unique val + follow order
    const map = new Map();
map.set("IN","India")
map.set("USA","United states of America")
map.set("Fr","France")
map.set("Fr","France")
console.log(map);


// for of loop for map

for (const [key,value] of map) {
    console.log(key , ":-",value);
}

// for of for obj ni chalta

// const myObject ={
//     "Game1":"NFS",
//     "Game2":"Spiderman"
// }

// for (const [key,value] of myObject) {
//     console.log(key,value);
// }