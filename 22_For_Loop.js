// for -loop


for(let i=0;i<=10;i++){
   // console.log(i);
}



for(let i=0;i<=10;i++){
// console.log(`Outer Loop Value ${i}`);
    for(let j=0;j<=10;j++){
 // console.log(`Inner Loop value ${j} and inner loop ${i}`);
// console.log(i + "*"+ j + " = " + i*j);    
}
}

let myArray =["flash","batman","superman"]

for(let i=0;i<myArray.length;i++){
   // console.log(myArray[i]);
}


// Break and continue
// Break control flow ko hi break kar dena
// continue condition ko ek baar skip kr do | loop se bahar ni
for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        break
    }
console.log(`Value of i is ${i}`);

}


for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        continue
    }
console.log(`Value of i is ${i}`);

}