"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart');


console.log(box);
console.log(btns); // HTMLCollection - псевдомассив
console.log(circles); //
console.log(wrapper);
console.log(hearts);