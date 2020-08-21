"use strict";
//Learn Динамичная типизация данных в JS

//1. To String

//1.1
console.log(typeof (String(null)));
console.log(typeof (String(4)));

//1.2
console.log(typeof (5 + ""));
console.log(typeof (NaN + ""));

const num = 5;
console.log("https://vk.com/catalog" + num);

const fontSize = 26 + 'px';


//2. To Number

//2.1
console.log(typeof (Number("4")));

//2.2
console.log(typeof (+"4"));

//2.3
console.log(typeof (parseInt("12px", 10)));
console.log(typeof (parseFloat("12px", 10)));


//3. To Boolean

// This is FALSE
0, '', null, undefined, NaN;
//All other type is TRUE

//3.1
let switcher = null;

if(!switcher){
    console.log("Work");
}

//3.2
console.log(typeof (Boolean("4")));

//3.3
console.log(typeof(!!"4"));
