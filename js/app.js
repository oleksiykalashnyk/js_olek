"use strict";

//Создаем обьек для хранения данных
const personalMovieDB = {

    //Задаём свойства объекта
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    //Начало обьъекта c CallBack функцией!!! на метод detect
    start: (x, y) => {
        personalMovieDB.count = +prompt("Сколько  фильмов ты посмотрел?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько  фильмов ты посмотрел?", "");
        }
        x();
        y();
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const
                a = prompt("Один из последних фильмов???", ""),
                b = prompt("Какая оценка???", "");

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                console.log("error");
                --i;
            }
        }

        for (let i in personalMovieDB.movies) {
            console.log(`${i} = ${personalMovieDB.movies[i]}`);
        }
    },

    //Узнаём количество просмотренных фильмов
    detectPersonalLevel: () => {
        if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
            console.log("Очень мало фильмов ты посмотрел бро!");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Да ты обычный поц...");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ты что бля киноман?");
        } else if (personalMovieDB.count === 0) {
            personalMovieDB.start();
            personalMovieDB.detectPersonalLevel();
        } else {
            console.log("Какая то ошибка бро(((");
        }
    },

    //Узнаём жанры и выводим их
    writeYourGenres: () => {
        //Первый длинный способ
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Назови жанр ${i}:`, '');
            if (genre === "" || genre == null) {
                console.log("Вы ввели некорректные данные или не ввели их вообще");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach(
            (item, i) => {
                console.log(`Вы ввели жанр номер ${i+1} со значением ${item}`);
            }
        );

        //Второй способ с переводом строки в массив
        for (let i = 4; i < 5; i++) {
            let newGenre = prompt("Введите ваши любимые жанры через запятую", "a,b,c  - без пробелов");
            if (newGenre === "" || newGenre == null) {
                console.log("Вы ввели некорректные данные или не ввели их вообще");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = newGenre;
            }
        }
        let newGenreString1 = personalMovieDB.genres[3].split(",").forEach((item, i) => {
            console.log(`Вы ввели жанр номер ${i + 1} со значением ${item}`);
        });

        //Второй способ  с сортировкой массива по алфавиту
        let newGenreString2 = personalMovieDB.genres[3].split(",").sort().forEach((item, i) => {
            console.log(`Вы ввели жанр после сортировки АБВГД номер ${i + 1} -  ${item}`);
        });

    },
    //Показать данные из объекта
    showMyDB: () => {
        (!personalMovieDB.privat) ? console.log(personalMovieDB): "";
    },
    //Сменить метод PRIVAT на противоположный
    toggleVisibleMyDB: () => {
        (!personalMovieDB.privat) ? personalMovieDB.privat = true: personalMovieDB.privat = false;
    }

};

personalMovieDB.start(personalMovieDB.detectPersonalLevel, personalMovieDB.rememberMyFilms);