"use strict";
//Learn Object-oriented programming (OOP)

//Старый способ прототипирования через __proto__
const soldier = {
    health: 400,
    armor: 100,
    sayHello: () => "Hello"
};

const jonh = {
    health: 100
};
jonh.__proto__ = soldier;
console.log(jonh.sayHello());

//Новый способ - который еквивалентный первому 
const olek = {};
Object.setPrototypeOf(olek,soldier);
console.log(olek.sayHello());


//Более Юзабельный способ и более качественный
const maxim = Object.create(olek);
console.log(maxim.armor);
console.log(maxim.health);
