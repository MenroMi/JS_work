"use strict";


const btn = document.querySelector('button');

btn.addEventListener('click', () => {

        if (!btn.classList.contains('another-color')) {
            btn.classList.add('another-color');
        } else {
            btn.classList.remove('another-color');
        }

});

btn.addEventListener('click', function() {

    console.log(this); // в этом случае контекст вызова элемент на котором произошло событие
    // контекст вызова == event.target
    
    // this.style.backgroundColor = 'red';

});

btn.addEventListener('click', () => { // undefined
    // контекст вызова отсутствует 

    console.log(this);

});

// в обработчиках событий, работая через function() доступ к this имеется !!!
// в случае стрелочной функции - такого доступа нет !!!! 
// чаще используется в обработчиках чаще используется объект события



// ======================================