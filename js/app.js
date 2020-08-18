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

//Функция для копирования объекта
function copyObj(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 4,
        z: 6
    }
}

const newNumbers = copyObj(numbers);
console.log(newNumbers);
newNumbers.a = 100;
newNumbers.c.x = "32";

//Но это функция копирует только поверхостно ( только свойства объекта первого уровня) - если есть объект в объкте то все одно это ссылочная передача значения
console.log(newNumbers.c.x);
console.log(numbers.c.x);

//Объединение объектов!!!

const x = {
    a: 4,
    b: 6
}
const y = {
    c: 10,
    d: 16
}


//Объединили объекты записав их в новый объект
const xy = Object.assign(x, y);
console.log(xy);

//С помощью Object.assign() Можно создать КЛОН объекта, ну или копировать)))
const clone = Object.assign({}, numbers);
clone.c.x = "Super";
console.log(numbers);
console.log(clone);

//Копирование массивов - немного проще 
//Это СТАРЫЙ стандарт
const oldArray = [1, 2, 3, 5, 8];
const newArray = oldArray.slice();

newArray[1] = 'New element';
console.log(newArray);
console.log(oldArray);

//Это НОВЫЙ стандарт
//СПРЭТ  [...arr1, ...arr2] - это оператор РАЗВОРОТА
const
    video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "blog+", "other"],
    internet = [...video, ...blogs, "vk", "face"];

console.log(internet);

//Пример СПРЭТ оператора
function spret(a, b, c) {
    console.log(a+b+c);
}
const num = [6,12,32];
spret(...num);


//СПРЭТ для объектов
//Получаеться коппия - которую уже можно менять
const q = {
    a:2,
    b:5
}
const newQ = {...q};
newQ.a = 12;

console.log(newQ);
console.log(q);
