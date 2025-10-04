const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// Adding 10 to each num
// const newNums =   myNumbers.map((num)=>{
//     return num + 10
// })




// Chaining 

const newNums1 = myNumbers
.map((num)=> num * 10)
.map((num)=> num + 1 )
.filter((num)=> num >=40)
console.log(newNums1);



const myNums = [1,2,3]

const myTotal = myNums.reduce((accumulator , currentValue)=> 
    accumulator + currentValue, 0 )

console.log(myTotal);

const shoppingCart =[

    {
        itemName:"JS COURSE",
        price:999
    },
    {
        itemName:"Py COURSE",
        price:9999
    },
    {
        itemName:"Mobile App COURSE",
        price:10000
    },

   
]

const priceToPay =shoppingCart.reduce((acc,item)=>acc + item.price,0 )

console.log(priceToPay);
