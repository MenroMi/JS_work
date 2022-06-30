// ============== example #1
// const timeId = setTimeout(function() {
//     console.log('hello');
// }, 2000);
// ============== example #2
// const timeId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'hello');
// ============== example #3
// const timeId = setTimeout(logger, 2000);
// function logger() {
//     console.log('text');
// }

// =========================

const btn = document.querySelector('.btn');
let timeId,
    i = 0;

function counter(fnumber, lnumber) {

    let count = fnumber;
    let timer = setInterval(function calculate() {
        if (count < lnumber) {
            count++;
            console.log(count);
        } else {
            clearInterval(timer);
        }
    }, 100);

    return timer;

}

counter(45, 50);



// function myAnimation() {
//      const elem = document.querySelector('.box');
//      let pos = 0;
     
//      const id = setInterval(frame, 10); // maybe can 0 but script make 4mm
//      function frame() {
//         if (pos == 300) {
//             clearInterval(id);

//         } else{
//             pos++;
//             elem.style.left = pos + "px";
//             elem.style.top = pos + "px";

//         }

//      }
// }

// btn.addEventListener('click', myAnimation);

// ===========================

// const btn = document.querySelector('.btn');
     
// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0,
//         down = true;
 
//     setTimeout(frame, 10);
   
//     function frame() {
        
//         if (down && pos < 300) {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         } else if (pos == 300) {
//             down = false;
//             pos--;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         } else if (pos == 0) {
//             down = true;
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         } else {
//             pos--;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//         console.log(down, pos);
//         setTimeout(frame, 10);
//     }
// }
 
// btn.addEventListener('click', myAnimation);

// ============================


// btn.addEventListener('click', () => {

//     // const timeId = setTimeout(logger, 2000);
//     timeId = setInterval(logger, 500);

// });


// function logger() {
//     if (i === 2) {
//         clearInterval(timeId);
//     }
//     console.log('text');
//     ++i;
// }

// let id = setTimeout(function log() { // recursion setTimeOut better setInterval

//     console.log('Hello');
//     id = setTimeout(log, 500);

// }, 500);

