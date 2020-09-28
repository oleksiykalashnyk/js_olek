'use strict';

// document.querySelector(".promo__adv").remove();


let arr = [],

    buttonClick = document.querySelector(".add"),
    buttonX = buttonClick.querySelector("button"),

    promoList = document.querySelector(".promo__interactive-list"),
    liEls = promoList.getElementsByTagName("li"),


    getAllLi = () => {
        for (let i = 1; i <= liEls.length; i++) {
            let x = liEls[i - 1].innerText;
            arr.push(x);
        }
    },

    removeLi = () => {
        let liList = promoList.querySelectorAll("li");
        for (let i = 1; i <= liList.length; i++) {
            liList[i - 1].remove();
        }
    },

    setLi = () => {
        getAllLi();
        removeLi();
        arr.sort();

        for (let i = 0; i < arr.length; i++) {
            let newEl = document.createElement("li");
            newEl.classList.add("promo__interactive-item");
            newEl.innerText = arr[i];
            promoList.append(newEl);

            let newDelEl = document.createElement("div");
            newDelEl.classList.add("delete");
            newEl.append(newDelEl);
            addListenDel();
        }
    },

    getInput = (evt) => {
        evt.preventDefault();
        let inputInPage = document.querySelector(".adding__input");

        if (inputInPage.value != "") {
            arr.push(inputInPage.value);
            arr.sort();
            inputInPage.value = "";
            inputInPage.placeholder = "Что нибуть ещё?";
        }
        setLi();
        arr.length = 0;
    },

    listenDel = (x) => {
        x.onclick = function (e) {
            let clickBlock = e.target;
            let parentText = clickBlock.offsetParent.innerText;

            getAllLi();
            removeLi();

            let nubInArr = arr.indexOf(parentText);
            arr.splice(nubInArr, 1);

            setLi();
            arr.length = 0;
        };

    },
    addListenDel = () => {
        let allDelBut = document.querySelectorAll(".delete");

        allDelBut.forEach(item => {
            item.addEventListener('click', listenDel(item), false);
        });
    };


    addListenDel();
    buttonX.addEventListener('click', getInput);