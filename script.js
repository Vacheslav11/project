

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

    while (numberOfFilms !== '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

function rememberMyFilms () {
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
}

rememberMyFilms();

 function detectPersonalLevel(){
     if (personalMovieDB.count <= 10) {
         console.log("Просмотренно довольно мало фильмов");
     } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
         console.log("Вы классический зритель");
     } else if (personalMovieDB.count >=30) {
         console.log("Вы киноман");
     } else {
         console.log("Проищошла ошибка");
     }
 }

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i -1]= prompt(`Ваш любимый жанр ${i}`);
    }
}

writeYourGenres();