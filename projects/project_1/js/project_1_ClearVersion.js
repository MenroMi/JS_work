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

first: do { // dodana została etykieta (label), do której można się zwrócić
    const lastFilm = prompt('Какой был последній просмотренный фільм?', '');
    if (lastFilm == false || lastFilm === null) { 
/*
Górny if zawiera warunki, gdy zmienna z odpowiedzią będzie miała pustą (false) lub anulowaną odpowiedź (null)
*/
        alert('Нельзя строк пустых');
        continue first; 
/*
W przypadku spełnionego warunku wyskakuje alarm i loop wraca do początku (dzięki połączonej etykiecie)
*/
    } else if (lastFilm.length >= 50) {
        alert('Слішком большое названіе!');
        continue first;
    }
    for ( let x = 0; x < 1; x++) {
        const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
        if (rateThisFilm > 10 || rateThisFilm === null || rateThisFilm == false) {
            alert('Оценка должна быть от 0 до 10.');
            x--;
/*
inkrement (x++) dodaje liczbę do naszej wartości (x), a przy spełnieniu warunka, to dekrement (x--) cofa
*/
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