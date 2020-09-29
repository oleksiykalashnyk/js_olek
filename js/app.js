"use strict";
//Start work for async, defer dynamic scripts 

const p = document.querySelectorAll('p');
console.log(p);


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.defer = true;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");
