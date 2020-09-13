/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Пила",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Дом3",
        "Ksu",
        "вывыв"
        
    ]
};


let addBlock = document.querySelector(".promo__adv");
addBlock.remove();

let catName = document.querySelector(".promo__genre");
catName.innerHTML = "драма";

let editBg = document.querySelector(".promo__bg");
editBg.style.backgroundImage = "url(img/bg.jpg)";

let listFilms = document.querySelector(".promo__interactive-list");
let delDiv = document.createElement("div");
delDiv.classList.add("delete");
movieDB.movies.sort().forEach((item, i) => {
    let newEl = document.createElement("li");
    newEl.classList.add("promo__interactive-item");
    newEl.append(delDiv);
    newEl.innerHTML = i+1 + " " + item;
    listFilms.append(newEl);
});
