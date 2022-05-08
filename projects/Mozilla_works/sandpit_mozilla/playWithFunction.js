// const num = 20;

// const myFirstMessage = function(a,b) {
//     let num = (a+b) * a;
//     return num;
// };

// console.log(myFirstMessage(5, 20));
// console.log(num);


// function myFirstCalc(firstNum, secondNum) {
//     let res = 0;
//     for (let count = 0; count < firstNum; count++) {
//         res = res + (firstNum * secondNum);
//     }
//     return res;
// }

// console.log(myFirstCalc(50, 5));



// const firstMessage = (a, b) => {return a + b;};

// console.log(firstMessage(5, 10));

const usdCurr = 28;
const eurCurr = 30;
const discount = 0.5;

function convert(amount, curr) {
    return amount * curr;
}

console.log(convert(500, usdCurr));


function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr)); // dzięki argumentom (czyli nawiasom) funkcja została wywołana, a jej wynik został
// przekazany jako argument do kolejnej funkcji
const res = convert(500, usdCurr); // tworzymy zmienną dla naszej funkcji
promotion(res);

function doNothing() {}
console.log(doNothing() === undefined);


// const firstName = myName => {return `Прівет, ${myName}!`;};

// console.log(firstName('Кірілл'));

// const newMassiv = function(a) {
//     return new Array(a-1, a, a+1);
// };

// console.log(newMassiv(5), newMassiv(3));


let firstName = "John";

function sayHi() {
return `Hi, ${firstName}!`;
}

firstName = "Pete";

const a = sayHi();
console.log(a);

function makeWorker() {
    let secondName = "Hello, Pete";
  
    return function() {
      console.log((secondName));
    };
  }
  
  const secondName = "Hello, John";
  const work = makeWorker();
  console.log(work());

  let phrase = 'Hello!';
  
  function sayHi(name) {
      return `${phrase}, ${name}`;
  }

  const b = sayHi('Alex');
  console.log(b);

function makeCounter() {
    let count = 0;

    return function() {
        return count++; // есть доступ к внешней переменной "count"
    };
}
  
let counter = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2

const bug = 2;

function FirstBug(title) { 

    this.secondBug = function() {
        console.log(title);
    };

}

let firstBug = new FirstBug('Cyryl');
firstBug.secondBug();


function createCounter() {
    let counter = 0;    
    const firstFunction = function() {
        counter += 1;
        return counter;
    };
    return firstFunction;
}

const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
console.log(increment(), increment(), increment());

function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
let counter1 = makeCounter();
let counter2 = makeCounter();

console.log( counter1() ); // 0
console.log( counter1() ); // 1

console.log( counter2() ); // 0 


let nameForFun = 'Johny';

function createNewFun(restOfSentence) {
    let counter = 0;
    const newInternalFun =  function() {
        counter += 1;
        let oneSentence = nameForFun + ' ' + restOfSentence + ' ' + counter;
        return oneSentence;
    };
    return newInternalFun;
}

// const resultSen = createNewFun('go back!');
// console.log(resultSen);


nameForFun = 'Anna';

const resultSen = createNewFun('come here!');
const c1 = resultSen();
const c2 = resultSen();
console.log(resultSen());


console.log(typeof undefined);


const arrowFun = n => x => {return x * n;};

const resArrowFun = arrowFun(3);
let res2ArrowFun = resArrowFun(5);
console.log(res2ArrowFun);

// =========================


// pierwsze zadanie:

function calculateVolumeAndArea(edge) {
    if (typeof(edge) === 'string' || edge < 0 || edge % 1 === 0 === false) {
        return "При вычислении произошла ошибка";
    } else if ( +edge ) {
        return `Объем куба: ${edge * edge * edge}, площадь всей поверхности: ${6 * (edge * edge)}`;
    }
}

const holy = calculateVolumeAndArea('50');
console.log(holy);

// ==========================

// drugie zadanie:

function getCoupeNumber(isInteger) {
    if (typeof(isInteger) != 'string' && Number.isInteger(isInteger) && (isInteger > 0 && isInteger < 36)) {
        if ([1, 2, 3, 4].includes(isInteger)) {
            return 1;
        } else if ([5, 6, 7, 8].includes(isInteger)) {
            return 2;
        } else if ([9, 10, 11, 12].includes(isInteger)) {
            return 3;
        } else if ([13, 14, 15, 16].includes(isInteger)) {
            return 4;
        } else if ([17, 18, 19, 20].includes(isInteger)) {
            return 5;
        } else if ([21, 22, 23, 24].includes(isInteger)) {
            return 6;
        } else if ([25, 26, 27, 28].includes(isInteger)) {
            return 7;
        } else if ([29, 30, 31, 32].includes(isInteger)) {
            return 8;
        } else if ([33, 34, 35, 36].includes(isInteger)) {
            return 9;  
        }
    } else if ( isInteger === 0 || isInteger > 36 ) {
        return "Таких мест в вагоне не существует";
    } else {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
}

let valueOurFun = getCoupeNumber(5);
console.log(valueOurFun);

// =====================

// trzecie zadanie:

function getTimeFromMinutes(time) {
    
    if (typeof(time) !== 'number' || !Number.isInteger(time) || time < 0 ) {
        return `Ошибка, проверьте данные`;
    } else {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        if (hours === 0 || (hours >= 5 && hours < 21)) {
        return `Это ${hours} часов ${minutes} минут`;
        } else if (hours === 1 || hours === 21 || hours === 31) {
        return `Это ${hours} час ${minutes} минут`;    
        } else {
        return `Это ${hours} часа ${minutes} минут`;          
        }
    }

}

console.log(getTimeFromMinutes(-150));

//==========================

// czwarte zadanie:


function findMaxNumber(num1, num2, num3, num4) {
    const arrayInFun = [num1, num2, num3, num4];
    let maxNumber = [];            // let largest = arrayInFun[0] || null;
    for (let k = 0; k < arrayInFun.length; k++) {
        let a = arrayInFun[k];
        if (typeof(a) === 'string' || isNaN(a)) {
            return 0;
        }
        maxNumber = Math.max(maxNumber, a);
    }
    return maxNumber;
}

console.log(findMaxNumber(1, 5, "6", "10"));