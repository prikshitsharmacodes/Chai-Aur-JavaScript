const coding =["js","ruby","java","python","cpp"]

coding.forEach((val)=>{
console.log(val);
})


function printMe(item){
    console.log(item);
}

coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Cpp",
        languageFileName:"c++"
    },

]

myCoding.forEach((item)=>{
console.log(item.languageName);
})