"use strict";
//Start work for mobile Events

//1. touchstart
//2. touchmove
//3. touchend
//4. touchenter
//5. touchleave
//6. touchscancel

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");


    //1. touchstart
    box.addEventListener('touchstart', (e) => {
        console.log("Start");
    });

    //2. touchmove
    box.addEventListener('touchmove', (e) => {
        console.log("Move");
    });

    //3. touchend
    box.addEventListener('touchend', (e) => {
        console.log("End");
    });

    //4. event touches
    box.addEventListener('touchstart', (e) => {
        console.log(e.touches); 
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });

    //5. Practice event touches
    box.addEventListener('touchmove', (e) => {
        console.log(e.targetTouches[0].pageX);
    });

});