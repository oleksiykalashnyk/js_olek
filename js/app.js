"use strict";
//Start work for Elements in the Page 

//1. set event in HTML  - Not recommended
// <button onclick="alert('Hi im button 1')">1</button>

//2. set event in JS  - Not recommended too
const btn2 = document.querySelector("#button_2");

btn2.onclick = function () {
    alert('Hi im button 2');
};

//3. set event Listener in JS use array function - Recommended 
const btn3 = document.querySelector("#button_3");

btn3.addEventListener("click", (i) => {
    // i this event
    console.log(i.target);
    alert('You click  button 3');
});

//4. set event Listener in JS use normal callBack function - Recommended 
const btn4 = document.querySelector("#button_4");
let num = 0;

const alertThisButton4 = (i) => {
    // console.log(i.target);
    alert('You click  button 4');
    num++;
    if (num == 1) {
        btn4.removeEventListener("click", alertThisButton4);
    }
};

btn4.addEventListener("click", alertThisButton4);


//5. set event Listener in JS use normal callBack function 
//And use overlay click currentTarget
const btn5 = document.querySelector("#button_5");
const overlay = document.querySelector(".overlay");

let num5 = 0;

const alertThisButton5 = (i) => {
    console.log(i.currentTarget);
    console.log(i.type);
    alert('You click  button 5');
    num5++;
    if (num5 == 1) {
        btn5.removeEventListener("click", alertThisButton5);
    }
};

btn5.addEventListener("click", alertThisButton5);
overlay.addEventListener("click", alertThisButton5);


//6. set event for LINK  -> Dont go for Link

const link = document.querySelector("a");

link.addEventListener("click", event => {
    event.preventDefault();
    console.log(event.target);
});


//7. event options - once -> only one Event 

link.addEventListener("click", event => {
    event.preventDefault();
    console.log("One click");
}, {
    once: true
});