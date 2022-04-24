const numberOfFilms = +prompt('Сколько фільмов вы уже посмотрелі?', ''); // ilość obejrzanych filmów
// + przed prompt oznacza, że pytanie będzie prosiło wyłącznie liczby
const personalMovieDB = { // obiekt dla naszej aplikacji
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let i = 0;

first: do {
    const lastFilm = prompt('Какой был последній просмотренный фільм?', '');
    if (lastFilm == false || lastFilm === null) {
        alert('Нельзя строк пустых');
        continue first;
    } else if (lastFilm.length >= 50) {
        alert('Слішком большое названіе!');
        continue first;
    }
    for ( let x = 0; x < 1; x++) {
        const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
        if (rateThisFilm > 10 || rateThisFilm === null || rateThisFilm == false) {
            alert('Оценка должна быть от 0 до 10.');
            x--;
        } else {
            personalMovieDB.movies[lastFilm] = rateThisFilm;
        }
    }
    // personalMovieDB.movies[lastFilm] = rateThisFilm;
    i++;    
} while ( i < 2 );

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы кіноман!');
} else {
    alert('Проізошла ошібка!');
}
console.log(personalMovieDB);