function one(){
    const username ="hitesh"

    function two(){
        const website ="youtube"
        console.log(username); // Hitesh will print out
  }
//  console.log(website); Cant Access
  two();
}
one()

// child func can take variable from parent


if(true){
    const username ="hitesh"
    if(username === "hitesh"){
        const website =" youtube"
        console.log(username + website);
    }
   // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++ interesting +++++++++

addone(5)
function addone(num){
    return num+1
}




// expression || variable holding func
const addTwo = function(num){
return num +2
}
addTwo(2)

addTwo(5)

// func declaration are hoisted butexpression aing