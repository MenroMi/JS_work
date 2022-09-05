const films = {
    movies: [
        'Matrix',
        'Joker',
]};


function addFilm() {

    const filmInput = document.querySelector("#myInput"),
          acceptBtn = document.querySelector('button');

    acceptBtn.addEventListener('click', function() {
        let inputVal = filmInput.value;
        films.movies.push(inputVal);
        console.log(films.movies);
    });

}

addFilm();