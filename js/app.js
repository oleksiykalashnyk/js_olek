"use strict";
//Start lean function CALLBACK

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS('JavaScript', function () {
    console.log("Я прошёл этот урок");
})


//Next gen CallBack function

function x(num, func) {
    console.log("1");
    console.log(num);
    func(num);
}

function y() {
    console.log("3");
}

function z(intInFunctionX) {
    console.log("Summa = " + "4" + +intInFunctionX);
}


x(3, y);

x("2", z);