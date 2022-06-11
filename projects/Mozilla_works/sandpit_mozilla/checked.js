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


let abs = {
  name: 'John',
  isAdmin: true,
  age: 30,
  oneFunc(keyCheck) {
    if (keyCheck === false) {
        abs.isAdmin = true;
        console.log('wartość zmiennej: ' + abs.isAdmin);
    } else if (keyCheck === true) {
        abs.isAdmin = false;
        console.log('wartość zmiennej: ' + abs.isAdmin);
    }
  }
};




abs.oneFunc(abs.isAdmin);
console.log(abs.isAdmin);
abs.oneFunc(abs.isAdmin);
console.log(abs.isAdmin);
abs.oneFunc(abs.isAdmin);
console.log(abs.isAdmin);


// =====================================
let aw = {
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
          
          aw.genres = answerUser.split(',');
          // a.genres = answerUser;
      }

  }

  aw.genres.forEach((key, i) => {
      console.log(`Любимый жанр #${i+1} - это ${key}`);
    });
  // personalMovieDB.genres.pop();
};

writeYourGenres();
console.log(aw.genres);

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

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {

  arr = arr.sort();

  let stringos = 'Оставшиеся студенты: ';
  let res = [[], [], []];
  
  arr.forEach((item, i) => {
    if ( i <= 2) {
      res[0].push(item);
    } else if (i <= 5) {
      res[1].push(item);
    } else if (i <= 8) {
      res[2].push(item);
    } else {
      stringos += `${item}, `;
    }
});

  stringos = stringos.length > 21 ? stringos = stringos.trim().slice(0, -1) : stringos += '-';

  // if (stringos.length > 21) {
  // stringos = stringos.trim().slice(0, -1);
  // } else {
  // stringos += '-';
  // }
  res.push(stringos);

  return res;

}

console.log(sortStudentsByGroups(students));

// }
  // let groupOne = [],
  // groupTwo = [],
  // groupThree = [],
  // restOfClassmates = 'Оставшиеся студенты: ';

  // for (let i = 0; i < arr.length; i++) {
  //   if (i < 3) {
  //     groupOne.push(arr[i]);
  //   } else if (i === 3 || i < 6) {
  //     groupTwo.push(arr[i]);
  //   } else if ( i === 6 || i < 9) {
  //     groupThree.push(arr[i]); 
  //   } else if (i === 9 || i > 9){
  //     restOfClassmates += `${arr[i]}, `;
  //   } else {
  //     break;
  //   }
  // }
  
  // if (restOfClassmates.length == 21) {
  //   restOfClassmates += '-';
  // } else {
  //   restOfClassmates = restOfClassmates.trim().slice(0, -1);
  // }

  // let result = [groupOne, groupTwo, groupThree, restOfClassmates];

  // console.log(result);


// console.log(sortStudentsByGroups(students));


// =====================
 
// function sortStudentsByGroups(arr) {
//   const sortArr = arr.sort();
//   console.log(sortArr);
 
//   const resultArr = [], groupArr = [];
 
//   sortArr.forEach(item => {
//     groupArr.push(item);
 
//     if (groupArr.length === 3) {
//       resultArr.push(groupArr.slice());
//       groupArr.length = 0;
//     }
//   });
 
//   resultArr.push(`Оставшиеся студенты: ${groupArr.length === 0 ? '-' : groupArr.join(', ')}`);
//   return resultArr;
// }

// console.log(sortStudentsByGroups(students));

// =================================

let x = 5;
console.log(x++); // 6 -

console.log([] + false - null + true); // false -  ???

let y = 1;
let h = y = 2;

console.log(h); // 2

console.log([] + 1 + 2); // ?

console.log("1"[0]); // 1

console.log(2 && 1 && null && 0 && undefined); // false -

console.log(!!(a&&b) === (a&&b)); // false

console.log(null || 2 && 3 || 4); // true +
 
let item1 = [1, 2, 3];
let item2 = [1, 2, 3];

console.log(item1 === item2); // true - ????

console.log(+"Infinity");  //isNaN -

console.log("Ёжик" > "яблоко"); // false +

console.log(0 || "" || 2 || undefined || true || false); //true 

console.log('ё'.codePointAt(0)); // показывает код элемента


let numbPre = 1;
console.log(++numbPre); // 2
let numbPost = 1;
console.log(numbPost++); // 1
console.log(numbPost); // 2

// ==============

const mainObj = {
  itemNumbOne: 'animal',
  itemNumbTwo: 'man',
  itemNumbThree: 'Technic'
};

function copyObj(cloneObj) {
  let newObj = {};

  for(let key in cloneObj) {
    newObj[key] = cloneObj[key];
  }

  return newObj;

}

console.log(copyObj());


// ==========================

let firstName = 'John',
  age = 35;

const objUser = {
  name: firstName,
  age: age,
};

console.log(objUser.name);
console.log(objUser.age);

// ============

let g = 5;
let j = g + 5;

console.log(g);
console.log(j);
console.log(g);

// ================

function yourName() {
  return this.name;
}

const myName = {
  name: 'Gog',
  isName: yourName
};

console.log(myName.isName());

// =================

function Admin(name, isAdmin) {
  this.name = name;
  this.isAdmin = isAdmin;
}

const userName = new Admin('John', true);

console.log(userName.isAdmin);