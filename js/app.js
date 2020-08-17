"use strict";

const numberOfFilms = +prompt("Сколько  фильмов ты посмотрел?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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



if (personalMovieDB.count <= 10) {
    console.log("Очень мало фильмов ты посмотрел бро!");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Да ты обычный поц...");
} else if (personalMovieDB.count >= 30) {
    console.log("Ты что бля киноман?");
} else {
    console.log("Какая то ошибка бро(((");
}

console.log(personalMovieDB);