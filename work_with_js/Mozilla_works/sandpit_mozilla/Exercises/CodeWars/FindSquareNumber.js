/*
Task

Given an integral number, determine if it's a square number:
*/


function sqNumber(numb) {
    let sqrt = Math.sqrt(numb);
    if (numb == -1 || (Math.pow(Math.trunc(sqrt), 2)) != numb) {
        return false;
    } else {
        return true;
    }
}

console.log(sqNumber(36));

// numb == -1 || (Math.pow(Math.trunc(sqrt), 2)) != numb ? false : true;

// =============== 

// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }