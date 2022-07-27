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
    this.parentElems = parentElems;
  }

  addElement() {
    console.log(this.elem);
    console.log(this.classes);
    console.log(this.parentElems);
  }

}

const alfabet = new Elements('h1', 'h2', 'h3');
alfabet.addElement();

const noise = new Elements('hmm', 'h1', 'h33');
noise.addElement();

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


