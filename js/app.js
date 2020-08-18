"use strict";
//Start lean function CALLBACK

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS('JavaScript', function () {
    console.log("Я прошёл этот урок");
})