'use strict';

const box = document.getElementById('box'); // metod - weź element z id

console.log(box);

// ==================

const btns = document.getElementsByTagName('button');
console.log(btns);

// ==================

const circles = document.getElementsByClassName('circle');
console.log(circles);

// ================== Nowoczesne metody

const hearts = document.querySelectorAll('.heart'); // przekazywanie selektorów CSS
hearts.forEach(item => {
    console.log(item);
});

const heartOne = document.querySelector('.heart'); // zwraca pierwszy spotkany element na stronie 
console.log(heartOne);


