
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('сколько фильмов вы посмотрели?', '');

        while (personalMovieDB.count !== '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count <= 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >=30) {
            console.log("Вы киноман");
        } else {
            console.log("Проищошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        }else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            //let genre = prompt(`Ваш любимый жанр ${i}`);
            //if (genre === '' || genre == null) {
            //    console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //    i--;
            //} else {
            //    personalMovieDB.genres[i - 1] = genre;
            //}
            let genres = prompt(`Введите свои любимые жанры через запятую`).toLowerCase();
            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split( ',' );
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
    }
};



