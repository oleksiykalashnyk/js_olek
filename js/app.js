"use strict";
//Start work for DOM Elements in the Page 

//1. body

console.log(document.body);

//2. All NODE childs inside body
console.log(document.body.childNodes);

//2.1 First NODE childs inside body
console.log(document.body.firstChild);

//2.1 Last NODE childs inside body
console.log(document.body.lastChild);

//3 Get the parent NODE element
console.log(document.querySelector('#current').parentNode);

//4. Use data-* attribute
console.log(document.querySelector('[data-current="3"]'));

//5. Use next NODE element
console.log(document.querySelector('[data-current="3"]').nextSibling);


//6. Use previous NODE element
console.log(document.querySelector('[data-current="3"]').previousSibling);

////////////////////////////////////
//7. Use ELEMENT
console.log("///////////////////////");


//7.1 Get the parent element
console.log(document.querySelector('[data-current="3"]').parentElement);

//7.2 First child inside body
console.log(document.body.firstElementChild);

//7.3 Last child inside body
console.log(document.body.lastElementChild);

//7.4 Use previous element
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//7.5 Use next element
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

////////////////////////////////////
// 8. Use FOR/OF
console.log("///////////////////////");
////////////////////////////////////

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}