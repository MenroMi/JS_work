"use strict";

const box = document.getElementById('box');
const wrapper = document.querySelector('.wrapper'),
    heart = wrapper.querySelectorAll('.heart'),
    btns = document.querySelectorAll('button'),
    circles = document.querySelectorAll('.circle');
    
console.log(box);
console.log(wrapper);
console.log(heart);
console.log(btns);

btns[0].style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'border-radius: 10%';

circles.forEach(item => {
    item.style.border = '10px double black';
    item.style.borderRadius = '20%';
});

// ==============

const div = document.createElement('div'); 
div.classList.add('black');

// document.body.append(div);
wrapper.append(div);

div.innerHTML = "<h1>Hello, World</h1>";
// div.textContent = "Hello";

// =====================

div.insertAdjacentHTML('afterend', "<h2>Hello, World</h2>");