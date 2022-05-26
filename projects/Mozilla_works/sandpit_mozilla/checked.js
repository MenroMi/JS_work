let user = {
  name: "John",
  surname: "Smith",
  fullName(value) {
      [this.name, this.surname] = value.split(' ');
      return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(user.fullName('Alice Cooper')); // John Smith (*)

// срабатывает сеттер!
admin.fullName('Alice Cooper'); // (**)
console.log(admin.name); // Alice
console.log(admin.surname); // Cooper

// ===============================


let a = {
  name: 'John',
  isAdmin: true,
  age: 30,
  oneFunc(keyCheck) {
    if (keyCheck === false) {
        a.isAdmin = true;
        console.log('wartość zmiennej: ' + a.isAdmin);
    } else if (keyCheck === true) {
        a.isAdmin = false;
        console.log('wartość zmiennej: ' + a.isAdmin);
    }
  }
};




a.oneFunc(a.isAdmin);
console.log(a.isAdmin);
a.oneFunc(a.isAdmin);
console.log(a.isAdmin);
a.oneFunc(a.isAdmin);
console.log(a.isAdmin);


// =====================================
let a = {
  firstname: 'John',
  genres: []
};


let writeYourGenres = () => {
  
  // 4
  for ( let k = 1; k < 2; k++) {

      let answerUser = 'Фантастика,Боевик,драма';
      if ( answerUser == null || answerUser == '' || +answerUser) {
          console.log('Введены некорректные данные');
          k--;
      } else {
          
          a.genres = answerUser.split(',');
          // a.genres = answerUser;
      }

  }

  a.genres.forEach((key, i) => {
      console.log(`Любимый жанр #${i+1} - это ${key}`);
    });
  // personalMovieDB.genres.pop();
};

writeYourGenres();
console.log(a.genres);

