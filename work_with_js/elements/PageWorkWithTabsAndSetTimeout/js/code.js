// // const sayHi = prompt('Your name?', ''); // najpierw zapyta, a dopiero później wywoła settimeout
// const nameArray = [];
// function alarm(hello) {
//     const sayHi = prompt('Your name?', '');
//     nameArray.push(sayHi);
//     // const sayHi = prompt('Your name?', ''); // nie będzie żadnej odstępu czasu między wpisaniem imię
//     // a działaniem settimeout
//     alert(`${hello}, ${sayHi}`);
    
//     if ( nameArray.length >= 3 ) {
//         clearInterval(timerId);
//         console.log(nameArray);
//     } else {
//         setTimeout(alarm, 500, 'Hello');
//     }


// }
// const timerId = setTimeout(alarm, 500, 'Hello');


// let delay = 1000,
//     count = 0,
//     arrayCount = [];

// function calcAndAddDelay() {
//     count++;
//     arrayCount.push(count);
//     console.log(count);
//     console.log(`Задержка: ${delay}`);

//     if (arrayCount.length >= 10 && arrayCount.length < 20) {
//         delay -= 100;
//         // console.log(delay);
//     } else if (arrayCount.length >= 20 && arrayCount.length < 30) {
//         delay += 100;
//         // console.log(delay);
//     }

//     if ( arrayCount.length == 30) {
//         clearTimeout(timerId);
//         console.log(count, arrayCount);
//     } else {
//         setTimeout(calcAndAddDelay, delay);
//     }
// }


// const timerId = setTimeout(calcAndAddDelay, delay);

// ===================


// function printNumbers(from, to) {
    
    // if (from < to) {
    //     from++;
    //     console.log(from);
    //     setTimeout(printNumbers, 500, from, to);
    // } else {
    //     clearTimeout(timer);
    //     console.log(`number left: ${from}\nnumber right: ${to}`);

    // }

// }

// const timer = setTimeout(printNumbers, 500, 10, 30);


// let start = 5,
//     end = 10;

// const clock = setInterval( function() {start++; 
//     console.log(start);
//     if (start == end) {
//         setTimeout(() => {
//             if (start == end) {
//                 clearInterval(clock);
//                 console.log('STOP');
//             }
//         }, 1000);
//     }
// }, 2000);


// =======================================

let startTime = Date.now(),
    count = 0;


let timer = setInterval(() => {
    let timePassed = Date.now() - startTime;
    
    if (timePassed >= 2000) {
        clearInterval(timer);
    }

    calcNumbers();


}, 20);

function calcNumbers() {
    count++;
    console.log(count);
}
