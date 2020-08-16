"use strict";

const numberOfFilms = prompt("How many films you see?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const 
    a = prompt("Last see film?", ""),
    b = prompt("How many star???", ""),
    c = prompt("Last see film?", ""),
    d = prompt("How many star???", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);