"use strict";

//Обьявляем переменные 
let numberOfFilms;

//Создаем обьек для хранения данных
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//Функии

//Функция вопроса количества фильмов !!!(Принимает только число)
function start() {
    numberOfFilms = +prompt("Сколько  фильмов ты посмотрел?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько  фильмов ты посмотрел?", "");
    }
}


//Функция для опроса по фильмам
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const
            a = prompt("Один из последних фильмов???", ""),
            b = prompt("Какая оценка???", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            --i;
        }
    }
}


//Функция для оценки пользователя по количеству фильмов
function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log("Очень мало фильмов ты посмотрел бро!");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Да ты обычный поц...");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ты что бля киноман?");
    } else {
        console.log("Какая то ошибка бро(((");
    }
}


//Функция проветяет приватность обьекта
function showMyDB(hidden) {
    if (!hidden) {
        //Показываем собержимое обьекта
        console.log(personalMovieDB);
    }
}

//Функция спрашивает три жанра и записывает в массив
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Назови жанр ${i}:`, '');;
    }
}

//Запускаем функции

// start();
// rememberMyFilms();
// detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);