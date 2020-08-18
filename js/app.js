"use strict";
//Learn Massive and PsevdoMassive

//Создаем массив
let arr = [4, 6, 1, 2, 3, 5, 8];

//Удаляем последний елемент массива
arr.pop();

//Добавляем к концу массива елемент
arr.push(11);

//Выводим наш массив
console.log(arr);

//Перебираем массив классичиским методом через FOR
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Перебираем массив новым методом через FOR OF
for (let i of arr) {
    console.log(i);
}

//// .length Массива всегда будет равна индексу последнего елемента массива плюс один
arr[99] = 0;
console.log(arr.length);

// Обьявим 99й елемент массива "0" и пробуем его показать посмотрим длину массива и сам массив
console.log(arr.length);
console.log(arr);

//forEach медод массива который может принимать callback функцию с 3 переменными 
//1е - значение елемента массива
//2е - номер елемента массива
//3е - массив который мы используем 
arr.forEach(function (item, i, arr) {
    console.log(`Елемен массива ${i} который стоит на месте ${i} внутри массива ${arr}`);
});

//Формируем массив на основании строки
const str = prompt("", "");
const product = str.split(", ");
console.log(product);

//Сортируем наш массив
//.sort() сортирует всё как СТРОКИ!!!!
console.log(product.sort());

//Формируем строку на основании массива
console.log(product.join(": "));

//Сортируем числа с помощью функции которая заменяет алгорим действия .sort()
arr.sort();
console.log(arr);

function sortNumber(a, b) {
    return a - b;
}
arr.sort(sortNumber);
console.log(arr);
