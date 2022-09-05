"use strict";

let count = 0;

for (let i = 0; i < 1e9; i++) {
    count++;
    if (count >= 1e9) {
        alert('done');
    }
}


// ===================


function expression(number, operation) {
    console.log('expression');
    if (!operation) return number;
    return operation(number);
}

function five(operation) {
    console.log('five');
    return expression(5, operation);
}

function seven(operation) {
    console.log('seven');
    return expression(7, operation);
}

function times(x) {
    console.log('times');
    return function(y) {
        return y * x;
    };
}