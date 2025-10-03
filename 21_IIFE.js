// Immediately invoked function expression

// global scope se koi pollution ni chahye tho hum alag scope bnate
// immediately invoke ho jae

// named iife
(function chai (){
    console.log("DB CONNECTED");
})();

// un-named iife
((name)=>{
    console.log("DB CONNECTED " +name );
})("hitesh")