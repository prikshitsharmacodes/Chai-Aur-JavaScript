## Lecture 1

Don't use var in modern code because of the issue of functional and block scope

## lecture for comparison
null > 0 // false
null =0 // false
null >=0  // true

reason is comparison and equality works differently.
comparison > < >= <= converts null to number treating it as 0

undefined ko kisi se check kro false hi dega

=== value tho check krta + datatype bi use krta

## Math.random formula
const min = 10;
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min) 

## Accessing object
two ways
-> jsuser.name
-> jsuser["name"]

-> 2 ways to make obj
-> literal 
-> constructor -> singelton

-> symbol as key in obj
const mySym = new Symbol("mySym")

{
    [mySym]="mykey"
}