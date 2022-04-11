const numberOfFilms = +prompt('Сколько фільмов вы уже посмотрелі?', ''); // ilość obejrzanych filmów


const personalMovieDB = { // obiekt dla naszej aplikacji
    count: [numberOfFilms],
    movies: {

    },
    actors: {},
    genres: [],
    privat: false,
};


const lastFilm = prompt('Какой был последній просмотренный фільм?', ''); 
// pytanie do użytkownika o nazwie ostatniego filmu
const rateThisFilm = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');
// pytanie dotyczące oceny danego filmu

const lastFilm1 = prompt('Какой был последній просмотренный фільм?', '');
const rateThisFilm1 = +prompt('Какую оценку Вы бы поставілі этому фільму?', '');

personalMovieDB.movies[lastFilm] = rateThisFilm;
personalMovieDB.movies[lastFilm1] = rateThisFilm1;

console.log(personalMovieDB);

//+prompt('Сколько фільмов вы уже посмотрелі?')
//prompt('Какой был последній просмотренный фільм?')
//+prompt('Какую оценку Вы бы поставілі этому фільму?');