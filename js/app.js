"use strict";
//Start work for Elements in the Page 


//1. READ (get) ELEMENTS  in the page
console.log("------------PART 1-------------");

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

for (let i = 0; i <= hearts.length; i++) {
    console.log(hearts[i]);
}

hearts.forEach(item => {
    console.log(item);
});

//Read element for QuerySelector  by ALL type name/class/id/other 
let heartFirstOne = document.querySelector('.heart');
console.log(heartFirstOne);


//2. EDIT OR ADDS (set) ELEMENTS in the page
console.log("------------PART 2-------------");

//Read elements in the new variable
let newBox = document.getElementById('box'),
    newBtns = document.getElementsByTagName('button'),
    newCircles = document.getElementsByClassName('circle'),
    newHearts = document.querySelectorAll('.heart'),
    newHeartOne = document.querySelector('.heart');

//Manipulating linear styles in the elements

//Use method .style 
newBox.style.backgroundColor = "black";
newBox.style.width = "400px";
newBox.style.height = "400px";

newBtns[0].style.borderRadius = "25px";

//Changing all elements in a variable to green
for (let i = 0; i < newCircles.length; i++) {
    newCircles[i].style.backgroundColor = "#0f0";
}

//Use method .style.cssText
newBox.style.cssText = "border-radius: 25px;";

//Create new element 
let newElement = document.createElement('div');

//Adding style classes for this new element
newElement.classList.add('black');

//New modern way

//Use .append()
//Adding this DIV at the end of the page
document.body.append(newElement);

//Adding this DIV after or at the end of the element
document.querySelector('.wrapper').append(newElement);
//This same for this refactoring
let thisWrapper = document.querySelector('.wrapper');
thisWrapper.append(newElement);

//Adding this DIV before or at the beginning of the element
//Use .prepend()
thisWrapper.prepend(newElement);

//Use .before()
newHearts[1].before(newElement);

//Use .after()
newHearts[0].after(newCircles[2]);

//The replacement elements in some places
newCircles[0].replaceWith(document.querySelector("#box"));

//The old way is already rare

//Use .appendChild()
newCircles[1].appendChild(newHearts[0]);

//Use .insertBefore()
document.querySelector(".wrapper").insertBefore(newElement, newHearts[2]);

//Use .replaceChild()
document.querySelector(".wrapper").replaceChild(newHearts[0], newElement);


//Delete elements from a page

//New way
newHearts[0].remove();

//The old way
document.querySelector(".wrapper").removeChild(newHearts[1]);


//Add text of HTML code in the element
//Use .innerHTML
newBox.innerHTML = "<h1>Hello</h1>";

//Use .textContent - only text, dont show HTML 
newBox.textContent = "Ooo";

//Use .insertAdjacentHTML()
document.querySelectorAll(".heart")[0].insertAdjacentHTML('beforebegin',"<h1>Hello</h1>");
document.querySelectorAll(".heart")[0].insertAdjacentHTML('afterbegin',"<h1>Ok</h1>");
document.querySelectorAll(".heart")[0].insertAdjacentHTML('beforeend',"<h1>laste</h1>");
document.querySelectorAll(".heart")[0].insertAdjacentHTML('afterend',"<h1>Goodbye</h1>");
