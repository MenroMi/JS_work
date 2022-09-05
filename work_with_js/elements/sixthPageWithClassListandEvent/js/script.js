const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length); // we checked amount of classes this element
// console.log(btns[0].classList.item(1)); // we can take definite class by using index of element
console.log(btns[1].classList.add('red')); // we add new created class in selected element
// add can added few classes
// console.log(btns[0].classList.remove('blue')); // we can remove selected class in element
// console.log(btns[0].classList.toggle('blue')); // this method deleted class when he exist or added selected class when he hot exist

// ===============

// if ( btns[0].classList.contains('green ')) { // we can check if selected class exist or not
//     console.log(true);
// } else {
//     console.log(false);
// }

// ===============


// btns[0].addEventListener('click', () => {

//     if (!btns[1].classList.contains('red')) {

//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }

// }); 

// ================

// console.log(btns[0].className); // this property not used in new projects...

// ================ events delegation

// wrapper.addEventListener('click', (e) => { 
//     if (e.target && e.target.tagName == 'BUTTON') { // target dodany specjalnie, ponieważ są tagi nieklikalne,
//         // co od razu pomoże je ominąć w conditions

//         console.log('hello');

//     }

// });

wrapper.addEventListener('click', (e) => { 
    if (e.target && e.target.matches("button.red")) { // target dodany specjalnie, ponieważ są tagi nieklikalne,
        // co od razu pomoże je ominąć w conditions

        console.log('hello');

    }

});

// btns.forEach(btn => {

//     btn.addEventListener('click', () => {

//         console.log('hello');

//     });

// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// =================

// wrapper.addEventListener('click', (e) => { 
//     if (e.target && e.target.classList.contains('blue')) { // target dodany specjalnie, ponieważ są tagi nieklikalne,
//         // co od razu pomoże je ominąć w conditions

//         console.log('hello');

//     }

// });