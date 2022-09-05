'use strict';

// localStorage.setItem("number", '2');

// localStorage.removeItem('number');
// localStorage.clear();
// const res = localStorage.getItem('number');

// console.log(res);


const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector("#color");

// if (localStorage.getItem('isChecked')) {
//     checkbox.checked = 'true';
// }

// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true);
// });

// if (localStorage.getItem('bg') === 'changed') {
//     form.style.backgroundColor = '#f5ebe0';
// }

// change.addEventListener('click', () => {

//     if (localStorage.getItem('bg') !== 'changed') {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundColor = '#f5ebe0';
//     } else {
//         localStorage.setItem('bg', 'null');
//         form.style.backgroundColor = '#fff';
//     }

// });


// const kiryl = {
//     age: 23,
//     hobby: "coding"
// };

// const serializedP = JSON.stringify(kiryl);
// localStorage.setItem("kiryl", serializedP);
// console.log(JSON.parse(localStorage.getItem('kiryl')));

// localStorage.clear();

const obj = [1, 2, 3, 4, 5, 6];

const json = JSON.stringify(obj);
localStorage.setItem('Lista znaków', json);

console.log(JSON.parse(localStorage.getItem('Lista znaków')));