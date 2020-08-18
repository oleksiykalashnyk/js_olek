"use strict";
//Learn передача значений по ССЫЛКЕ и по значению


//Разница между присвоением простых типов данных и объектов/массивов
let a = 5,
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
}

const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);

//Пауза на 6:03
//ok
