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
## DOM

 ### Selecting id
 document.getElementById("title")

 ### get class name
document.getElementById("title").className

### get class id
document.getElementById("title").id

### get attribute -> id , class
document.getElementById('title).getAttribute('id'/'class')

### set attribute || Always overwrite
document.getElementById('title).setAttribute('class','test')


const title = document.getElementById("title")

#### Adding style
title.style.backgroundColor="green"

title.style.padding ="15px"

title.style.borderRadius="20px"
'20px'

### Adding content

title.textContent
'DOM Learning on Chai Aur Code'

title.innerHTML
'DOM Learning on Chai Aur Code'

title.innerText
'DOM Learning on Chai Aur Code'

title.innerText
'DOM Learning on Chai Aur Code'

title.textContent
'DOM Learning on Chai Aur Code Text content '

title.innerHTML
'DOM Learning on Chai Aur Code <span style="display: none;">Text content</span>


getelementbyclass gives htmlcollection
-> we cant iterate over it so we need to convert it into from 


queryselectorall gives nodecollection 
-> not array
-> no map but we for each
myh2[0].innertext
