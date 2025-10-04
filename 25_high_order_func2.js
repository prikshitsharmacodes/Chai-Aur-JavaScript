
const myObject ={
    js:"Javascript",
    cpp:"c++",
    py:"python",
    rb:"Ruby",
    swift:"swift by apple"
}

// for -in loop
// keys deta
for (const key in myObject) {
    console.log(`${key}  shortcut for ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(key);
}

// For in won't run on map
const map = new Map()
map.set("IN","India")
map.set("USA","United states of america")
map.set("Fr","France")
map.set("IN","India")



for (const key in map) {
    console.log(key);
}

