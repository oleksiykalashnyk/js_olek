"use strict";
//Start lean METHODs strings and numbers


//Method for STRINGs

const arr = [1,5,6];
console.log(arr.length);

const str = "Olek";
console.log(str.length);
console.log(str[1]);

console.log(str.toLowerCase());
console.log(str.toUpperCase());


const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"))

const log = "123456789";

console.log(log.slice(0,5));
//12345

console.log(log.slice(5));
//6789


//Method for NUMBERs

const num = 12.5;
console.log(Math.round(num));

const test = "12.54px";

console.log(parseInt(test));
console.log(parseFloat(test));
