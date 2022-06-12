const lay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

// btn.onclick = () => {
//     alert('Click');
// };



// ============== addEventListener()
let i = 0;
const deleteBtn = (event) => {
    console.log(event.target);
    console.log(event.type);
    //     i++;
//     if ( i == 1) {
//         btn.removeEventListener('click', deleteBtn);
//     }

};

btns.forEach(button => {
    button.addEventListener('click', deleteBtn, {once: true});
});

const secondClick = () => {
    console.log('Thanks too');
}; 

// lay.addEventListener('click', deleteBtn);
// btns.addEventListener('click', deleteBtn);


// ================

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault(); // wycofuje klasyczne działanie linka
    console.log(e.target);
    console.log(e);
});
