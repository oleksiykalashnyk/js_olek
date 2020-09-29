/* Задания на урок 1:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

////////////////////////////////////////////////////////////

/* Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
'use strict';

document.addEventListener("DOMContentLoaded", () => {

    /////////////////////////////////////////////
    // Part 1
    /////////////////////////////////////////////

    const
        movieDB = {
            movies: [
                "Логан",
                "Пила",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость"

            ]
        },

        addBlock = document.querySelectorAll(".promo__adv img"),
        listFilms = document.querySelector(".promo__interactive-list"),
        catName = document.querySelector(".promo__genre"),
        editBg = document.querySelector(".promo__bg"),

        makeChenges = () => {
            editBg.style.backgroundImage = "url(img/bg.jpg)";
            catName.innerHTML = "драма";
        },

        deleteAvd = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
        },

        sortArr = (arr) => {
            arr.sort();
        },

        createMovieList = (films, perent) => {
            perent.innerHTML = "";
            sortArr(films);
            films.forEach((item, i) => {
                perent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${item}
                <div class="delete"></div>
            </li>
            `;
            });

            document.querySelectorAll(".delete").forEach((btn, i) => {
                btn.addEventListener("click", () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList(films, perent);
                });
            });
        };

    makeChenges();
    deleteAvd(addBlock);
    createMovieList(movieDB.movies, listFilms);

    /////////////////////////////////////////////
    // Part 2
    /////////////////////////////////////////////

    const
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.cheched;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            if(checkBox){
                console.log("add");
            }

            movieDB.movies.push(newFilm);
            createMovieList(movieDB.movies, listFilms);
        }

        event.target.reset();
    });
});