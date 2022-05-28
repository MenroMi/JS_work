"use strict";

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

// ==============================

const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      },
      {
        width: 8,
        length: 10
      },
      {
        width: 8,
        length: 10
      },
      {
        width: 8,
        length: 10
      },
  
  ],
  height: 10,
  moneyPer1m3: 30,
  budget: 40000
};

function isBudgetEnough(data) {

  let res = 0;  

  for ( let key of data.shops) {
    res += key.width * key.length;
  }

  res = (res * data.height) * data.moneyPer1m3;

  return res < data.budget ? "Бюджета достаточно" : "Бюджета недостаточно";

}

console.log(isBudgetEnough(shoppingMallData));

// function isBudgetEnough(data) {
  
//   let totalArea = 1;
//   let totalAreaMall = 0;

//   data.shops.forEach(shop => {
//     totalArea *= shop.width * shop.length;
//   });

//   console.log(totalArea);
  
//   totalAreaMall = totalArea * data.height;
  
//   return data.budget > (data.moneyPer1m3 * totalAreaMall) ? 'Бюджета достаточно' : 'Бюджета недостаточно';
//  }

//  console.log(isBudgetEnough(shoppingMallData));


// =========================

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Cyryl'];

function sortStudentsByGroups(arr) {
  arr = arr.sort();
  
  let groupOne = [],
  groupTwo = [],
  groupThree = [],
  restOfClassmates = 'Оставшиеся студенты: ';

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      groupOne.push(arr[i]);
    } else if (i === 3 || i < 6) {
      groupTwo.push(arr[i]);
    } else if ( i === 6 || i < 9) {
      groupThree.push(arr[i]); 
    } else if (i === 9 || i > 9){
      restOfClassmates += `${arr[i]}, `;
    } else {
      break;
    }
  }
  
  if (restOfClassmates.length == 21) {
    restOfClassmates += '-';
  } else {
    restOfClassmates = restOfClassmates.trim().slice(0, -1);
  }

  let result = [groupOne, groupTwo, groupThree, restOfClassmates];

  console.log(result);

}
sortStudentsByGroups(students);
// console.log(sortStudentsByGroups(students));