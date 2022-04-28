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

function sayHiBye(firstName, lastName) {

// функция-помощник, которую мы используем ниже
    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());

}

const firstFunct = sayHiBye('Cyryl', 'Szczasny');
console.log(firstFunct());

