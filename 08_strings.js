const name = "prikshit"
const repoCount = 50

console.log(` my name is ${name} and my repocount is ${repoCount}`); // String interpolation

const gameName = new String('hitesh-hc')

console.log(gameName[0]); // h
console.log(gameName.__proto__); // empty obj in node but thingsin web

console.log(gameName.length); // not function

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2
console.log(gameName.replace('t','s'));

console.log(gameName.endsWith('c')); // true

const newString = gameName.substring(0,4) // 0 to n-1 dont obey neg value
console.log(newString);

const anotherString = gameName.slice(-8,4)

console.log(anotherString);


const newStringOne = "       hitesh        "
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"


console.log(url.replace('%20','-'))


 console.log(url.includes('hitesh'))// true

const gameNaam  ='hitesh-hc-com'

console.log(gameNaam.split('-'));