"use strict";

// let numb = 50;

// while (numb <= 100) {
//     console.log(numb);
//     numb++;
// }

// let changeNumber = 100;

//  for (let count = 0; count <= changeNumber; count++) {
//      console.log(count);
//  }

let number = 5;
for (let count = 1; count < 8; count++) {
    console.log(count);
    if ( count === 5) {
        continue;
    }

}

// let result = ''; // rezultat pracy naszych loopów
// let amountEnter = 7; // ilość naszych przejść na nową linię

// for (let firstOne = 0; firstOne < amountEnter; firstOne++) { // pierwszy loop odpowiada za tworzenie nowych linii
  
//     for (let secondOne = 0; secondOne < firstOne; secondOne++) { // drugi loop odpowiada za dodawanie ilości gwizdek
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// first: for (let i = 2; i < 5; i++) {
//     console.log(`First tag: ${i}`);
//     for ( let j = 1; j < 4; j++) {
//         console.log(`Second tag: ${j}`);    
//         for ( let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third tag: ${k}`);
            
//         }
//     }
// }

// Место для первой задачи
function firstTask() {
    // Пишем решение вот     тут
    for (let numberForLoop = 5; numberForLoop <= 10; numberForLoop++) {
        console.log(numberForLoop);
    }
}
// let numberForLoop = 5;
// do {
//     console.log(numberForLoop);
//     numberForLoop++;
// } while (numberForLoop <= 10);


// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let minusNumberForLoop = 20; minusNumberForLoop >= 10; minusNumberForLoop--) {
        if (minusNumberForLoop === 13) {
            break;
        }
        console.log(minusNumberForLoop);
    }
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let plusNumber = 2; plusNumber <= 10; plusNumber += 2) {
        console.log(plusNumber);
    }
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i < 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    arrayOfNumbers.push(5, 6, 7, 8, 9,10);

    console.log(arrayOfNumbers);
    // Пишем решение вот тут
    
    
    // Не трогаем
    return arrayOfNumbers;
}

//===================

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    // console.log(arr[arr.length-2]);
    const result = [];

    // Пишем решение вот тут
    
    for (let i = 0; i < arr.length; i++) {
        let subArray = arr[i];
        result.push(subArray);
    }
    console.log(arr);
    console.log(result);
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let x = 0; x < data.length; x++) {
        if (typeof data[x] === 'number') {
            data[x] *= 2;
        } else {
            data[x] += ' - done';
        }
    }
    // data1.push(subArray);
    // console.log(data1);

    // for (const data1 of data) {
    //     if (typeof data1 === 'number') {
    //         data1 *= 2;
    //     } else {
    //         data1 += ' - done';
    //     }
    //     console.log(subArray);
    // }  
    // }

    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    const data1 = [];

    console.log(result.length);

    // Пишем решение вот тут
    for (let x = 4; x >= data1.length; x--) {
        result[4-x] = data[x];
        console.log(result);
    
    }
    // Не трогаем
    return result;
}


let result = '';

for (let i = 1; i < 8; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

const lines = 5;
let resultOne = '';

for (let enterLines = 1; enterLines <= lines; enterLines++) {

    for (let sign = enterLines; sign < enterLines; sign++) {
        resultOne += ' ';
    }

    for (let sign = 1; sign <= (2*enterLines - 1); sign++) {
        resultOne += '*';
    }

    resultOne += '\n';
}
console.log(resultOne);

// if ( b % 2 == 1) {
//     resultOne += '-';
// } else {
//     continue;
// } 

const linesTwo = 5;
let resultTwo = ''; 
 
for (let i = linesTwo ; i >= 0; i--) {
    for (let j = 0; j <= linesTwo; j++) {
        if (j < i) {
            resultTwo += " ";
        } else {
            resultTwo += '*';
        }        
    }
    for (let k = 0; k <= linesTwo; k++) {
        if (k > i) {
            resultTwo += "*";
        } else {
            resultTwo += '';
        }        
    }
    resultTwo += '\n';
}
 
console.log(resultTwo);

// ====================

let abc = 7;
let a = 0;


cont: for ( let i = 1; i <= abc; i++) {
    if (i >= 5) {
        continue cont;
    } else if (i === 1) {
        console.log(`${i} - человек`);
    } else if (i % 2 == 0 || i === 3) {
        console.log(`${i} - человека`); 
    }
}

// wyświetlić liczb pierwszych

const numbForNaturalNum = 100;

another: for (let k = 2; k <= numbForNaturalNum; k++) {
    for (let j = 2; j < k; j++) {
        console.log(`========= ${j} - ${k}`);
        if ( k % j == 0) {continue another;}
    }

    console.log(k);
}

// ==========================

const animals = ['lion','duck','horse'];
const autos = ['bmw','mercedes','opel'];

const zoo = [...animals, ...autos];

console.log(zoo[1]);


const arrayNumb = [1, 3, 15555, -354, -1, 45];

const smallestInt = Math.min(...arrayNumb);
const bigestInt = Math.max(...arrayNumb); // za pomoca spread możemy sprawdzić max i min liczbę
console.log(smallestInt, bigestInt);