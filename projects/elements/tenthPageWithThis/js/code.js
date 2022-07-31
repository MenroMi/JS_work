// "use strict";


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


function checkThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    
    sum();
}

checkThis(5, 10);

// ========================

const obj = {
    name: `${prompt('Hello?', '')}`,
    sayMyName() {
        console.log(`Yeah. Hello, ${this.name} :)`);
    }
};

obj.sayMyName();


const numbers = {
    a: 10,
    b: 15,
    calc() {
        function sum() {
            console.log(this);
        }
        sum();
    }
};

numbers.calc();

// ================================




