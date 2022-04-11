let numberOfFilms = []; // ilość obejrzanych filmów
let lastFilm = [], rateThisFilm = []; //ostatni film ( nazwa ), ocena filmu

numberOfFilms[0] = 3; // pytanie do użytkownika o ilości obejrzanych filmów
lastFilm[0] = "Matrix"; // pytanie do użytkownika o nazwie ostatniego filmu
rateThisFilm[0] = 7;  // pytanie dotyczące oceny danego filmu

const personalMovieDB = { // obiekt dla naszej aplikacji
    count: Number(numberOfFilms),
    movies:{
        [String(lastFilm)]: String(rateThisFilm)
    },
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB.movies);

//+prompt('Сколько фільмов вы уже посмотрелі?')
//prompt('Какой был последній просмотренный фільм?')
//+prompt('Какую оценку Вы бы поставілі этому фільму?');