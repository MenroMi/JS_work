'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    heartOne = document.querySelector('.heart');


// =============== inline styles

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red'; // pseudotablica nie reaguje na żadne style. 
// Więc trzeba wyciągać określone elementy dla zastosowania stylów.

circles[1].style.cssText = 'background-color: green; width: 500px';