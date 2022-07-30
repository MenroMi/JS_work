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


let delay = 1000,
    count = 0,
    arrayCount = [];

function calcAndAddDelay() {
    count++;
    arrayCount.push(count);
    console.log(count);
    console.log(`Задержка: ${delay}`);

    if (arrayCount.length >= 10 && arrayCount.length < 20) {
        delay -= 100;
        // console.log(delay);
    } else if (arrayCount.length >= 20 && arrayCount.length < 30) {
        delay += 100;
        // console.log(delay);
    }

    if ( arrayCount.length == 30) {
        clearTimeout(timerId);
        console.log(count, arrayCount);
    } else {
        setTimeout(calcAndAddDelay, delay);
    }
}


const timerId = setTimeout(calcAndAddDelay, delay);

