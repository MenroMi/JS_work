function addFilm() {

    const filmInput = document.querySelector(".add > input.adding__input"),
          acceptBtn = document.querySelector('.add > button');

    acceptBtn.addEventListener('click', function() {
        let inputVal = filmInput.value;
        movieDB.movies.push(inputVal);
    };

}

