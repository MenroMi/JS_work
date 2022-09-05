"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart');


console.log(box);
console.log(btns); // HTMLCollection - псевдомассив
console.log(circles); 
console.log(wrapper); 
console.log(hearts); // NodeList - динамический псевдомассив


// =====================
// #1 Styles

box.style.backgroundColor = 'green';
box.style.width = '500px';
btns[2].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';
box.style.cssText = 'background-color: purple';

// for ( let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink'; 
// }

hearts.forEach((heart) =>{

    heart.style.backgroundColor = 'pink';

});

// =====================
// #2 Main methods

const divElement = document.createElement('div'); // we create new element before publicate her on html document

divElement.classList.add('black'); // we add created styles on our new element

wrapper.append(divElement); // we add our element with styles on html document to the end / use this structure many times in code

// document.querySelector('.wrapper').append(divElement); // once use in code

// wrapper.prepend(divElement); // this method add js-element in document html to the start

// btns[0].before(divElement); // we add new element before changed element in html document

// btns[0].after(divElement); // we add new element after changed element in html document

// btns[2].remove(); // we remove changed element

// btns[0].replaceWith(divElement); // we replace first futton on divElement

divElement.innerHTML = "<span style='color: red;'>'Hello World!'</span>"; // we work with text and we can add html structure

wrapper.insertAdjacentHTML('beforeend', "<span style='color: blue; border: 3px solid black;'>'Hello World!'</span>");

// divElement.textContent = "Hello World";