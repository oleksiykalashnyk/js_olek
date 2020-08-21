"use strict";
//Start learn function


// Function declaration

function showFirstMassege(text) {
    console.log(text);
}

function calc(a, b) {
    return (a + b);
}

showFirstMassege("Hel1lo");

console.log(calc(4, 5));
console.log(calc(5, 9));


//Function expresssion

const longet = function () {
    console.log("Hello");
};

longet();


//Arrow function

const calcArrow1 = (a, b) => a + b;
//Or next type
const calcArrow2 = (a, b) => {return a + b;};

//Or Arrow functions for more options
const calcArrow3 = (a, b) => {
    const x = a ** b;
    const z = a + b;
    return x+z;

};


console.log(calcArrow1(2, 3));
console.log(calcArrow2(5, 7));
console.log(calcArrow3(4, 12));
