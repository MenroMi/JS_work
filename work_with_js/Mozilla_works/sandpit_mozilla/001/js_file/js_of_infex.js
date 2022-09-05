"use strict";

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
// let user = new User("Вася");
// let admin = new User('Андрей');
// admin.isAdmin = true;
// console.log(user.name, user.isAdmin);
// console.log(admin.name, admin.isAdmin);


// =======================
class Elements {
  constructor(elem, classes, parentElems) {
    this.elem = elem;
    this.classes = classes;
    this.parentElems = document.querySelector(parentElems);
  }

  addElement() {
    const element = document.createElement(this.elem);

    if (this.classes == ".square") {
      element.classList.add('square');
      document.body.append(element);
    } else {
      this.parentElems.append(element);
    }

  }

}

const noise = new Elements('div', '.square', 'body');
noise.addElement();

const firstBtn = new Elements('button', '', 'div');
firstBtn.addElement();
const secondBtn = new Elements('button', '', 'div');
secondBtn.addElement();


const divParent = document.querySelector('div'),
      btns = document.querySelectorAll('button');


function changeColorBtns(numb = 0) {
  if(btns[numb].style.backgroundColor == '') {
    btns[numb].style.backgroundColor = 'red';
  } else {
    btns[numb].style.backgroundColor = '';
  }
}

divParent.addEventListener('click', (event) => {
  const target = event.target;
  console.log(event);
  btns.forEach((btn, i) => {
    if ( target == btn) {
      changeColorBtns(i);
    }
  });

});


const time = Date.now();
const timeNew = new Date();

console.log(timeNew.getTimezoneOffset());
console.log(timeNew.getTime());
console.log(+timeNew);

// let count = 0;
// const timer = setInterval(function run() {
//   count++;
//   console.log(count);
//   if ( count == 5) {
//     setTimeout(() => {clearInterval(timer); console.log('stop it');});
//   }
// }, 1000);


// ===================

// let count = 0;

// function timer() {
//   if (count < 20) {
//     count++;
//     console.log(count);
//     setTimeout(timer, 2000);
//   } else {
//     clearInterval(timer);
//   }
// }

// setTimeout(timer, 2000);



// const 
//       divBack = document.createElement('div'),
//       btn = document.createElement('button'),
//       btn1 = document.createElement('button');


// document.body.append(divMain);

// const divParent = document.querySelector('div');

// divParent.append(btn, btn1);


// const btns = document.querySelectorAll('button');


// function changeColorBtn(numb = 0) {
//   if(btns[numb].style.backgroundColor == '') {
//     btns[numb].style.backgroundColor = 'red';
//   } else {
//     btns[numb].style.backgroundColor = '';
//   }
// }

// divParent.addEventListener('click', (e) => {
//   const target = e.target;
//     btns.forEach((btn, i) => {
//       if (target == btn) {
//         changeColorBtn(i);
//       }
//     });
// });

//======================

class Items {
  constructor(src, alt, title) {
      this.src = src;
      this.alt = alt;            
      this.title = title;
  }

  example() {
      console.log(this.src);
      console.log(this.alt);
  }


}

const divMain = new Items("img", "vegy");
divMain.example(); 


