const numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('один из просмотренных фильмов?', ''),
    b = prompt('на сколько оцениваете его?', ''),
    c = prompt('один из просмотренных фильмов?',''),
    d = prompt('на сколько его оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)