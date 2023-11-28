const numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('один из просмотренных фильмов?', ''),
          b = prompt('на сколько оцениваете его?', '');

    if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >=30) {
    console.log("Вы киноман");
} else {
    console.log("Проищошла ошибка");
}


console.log(personalMovieDB)