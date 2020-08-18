"use strict";
//Learn Object

//Обьявление объекта
const options = {
    name: "test",
    width: 1024,
    height: 900,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function () {
        console.log("test");
    }
};
console.log(options.name);

//Удалим свойство объекта
delete options.name;
console.log(options.name);

//Снова добавим свойство объекта
options.name = 'Olek';
console.log(options.name);

//Цыкл по объекту с выводом свойств
for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

//Цыкл по объекту с проверкой на Объект!!!
for (let key in options) {
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

//Использование методов для работы с объектами
console.log(Object.keys(options).length);

//Простой цыкл вывода названий методов и свойств объекта с помощью глобального метода работы с объектами Object.keys
let objValues = Object.keys(options);
for (let i = 0; i < objValues.length; i++) {
    console.log((i + 1) + " = " + objValues[i]);
}

//Запускаем свой личный метод с объкта
options.makeTest();

//Деструкторизация обьекта
const {border, background} = options.colors;
console.log(border);

//Посмотрим все встроеные методы строки
console.dir(String);