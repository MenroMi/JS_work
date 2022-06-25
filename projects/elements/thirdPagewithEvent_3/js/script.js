const overlay = document.querySelector('.overlay'),
      btn = overlay.querySelector('button');


const deletebtn = (trash) => {

    trash.remove();

};
 

let count = 0;
const button = (e) => {

    btn.textContent = 'Damn, CJ!';
    
    console.log(e.currentTarget); // represent queue of elements, which make an effect 
    // first one elements, which nested
    if (count == 1) {
        btn.textContent = 'Omg, bye!';
    } else if (count == 2) {
        btn.addEventListener('click', deletebtn(btn));
    }
    count++;
};

btn.addEventListener('click', button);
// overlay.addEventListener('click', button);


// btn.removeEventListener('dblclick', button);


const link = document.querySelector('a');

link.addEventListener('click', (e) => {

    e.preventDefault(); // cancel all properties of this element
    console.log(e.target);

}, {once: true});


// const btns = document.querySelectorAll('button');

// btns.forEach((btn) => {

//     btn.addEventListener('click', (e) => {
//         console.log(e.target);
//     });

// });
