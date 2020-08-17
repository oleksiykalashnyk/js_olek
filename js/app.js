"use strict";

if (4 == 5) {
    console.log('Ok!');
} else {
    console.log('Error');
}



const num = +prompt("num:","");
if (num < 49) {
    console.log('<49');
} else if (num > 50) {
    console.log('>50');
} else {
    console.log('other');50
}

(num === 50) ? console.log('true'): console.log('false');


switch (num) {
    case 49:
        console.log(`Not 50, but ${num}`);
        break;
    case 100:
        console.log(`Not 50, but ${num}`);
        break;
    case 50:
        console.log("Yes 50");
        break;
    default:
        console.log("Else");
        break;
}