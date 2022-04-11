let numberOfFilms = []; // ilość obejrzanych filmów
let lastFilm = [], rateThisFilm = []; //ostatni film ( nazwa ), ocena filmu

numberOfFilms[0] = +prompt('Сколько фільмов вы уже посмотрелі?'); // pytanie do użytkownika o ilości obejrzanych filmów
lastFilm[0] = prompt('Какой был последній просмотренный фільм?'); // pytanie do użytkownika o nazwie ostatniego filmu
rateThisFilm[0] = +prompt('Какую оценку Вы бы поставілі этому фільму?');  // pytanie dotyczące oceny danego filmu

const personalMovieDB = { // obiekt dla naszej aplikacji
    count: Number(numberOfFilms),
    movies:{[String(lastFilm)]: String(rateThisFilm)},
    actors: {},
    genres: [],
    privat: false,
};

alert(`Значіт, ты посмотрел ${personalMovieDB.count} фільма(ов)`);
alert(`Ostatni film i jego ranking - ${personalMovieDB.movies.lastFilm}`);

//+prompt('Сколько фільмов вы уже посмотрелі?')
//prompt('Какой был последній просмотренный фільм?')
//+prompt('Какую оценку Вы бы поставілі этому фільму?');

