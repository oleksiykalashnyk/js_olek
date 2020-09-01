"use strict";
//Start work for Elements in the Page 


//1. READ (get) ELEMENTS  in the page

//Read element by ID
let box = document.getElementById('box');
console.log(box);

//Read elements by TAG name 
let buttons = document.getElementsByTagName('button');
console.log(buttons);

for (let i = 0; i <= buttons.length; i++) {
    console.log(buttons[i]);
}

//Read elements by CLASS name 
let circle = document.getElementsByClassName('circle');
console.log(circle);

for (let i = 0; i <= circle.length; i++) {
    console.log(circle[i]);
}

//Read elements for QuerySelectorAll  by ALL type name/class/id/other 
let hearts = document.querySelectorAll('.heart');
console.log(hearts);

for(let i = 0; i <=hearts.length; i++){
    console.log(hearts[i]);
}

hearts.forEach(item => {
    console.log(item);
});

//Read element for QuerySelector  by ALL type name/class/id/other 
let heartFirstOne = document.querySelector('.heart');
console.log(heartFirstOne);


//2. EDIT OR ADDS (set) ELEMENTS in the page