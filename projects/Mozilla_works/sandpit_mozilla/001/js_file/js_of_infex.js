"use strict";

function hello() {
    console.log('Hello World!');
}

hello();

function hi() {
    console.log('Say hi!');
}

hi();

const arr = [12, 4, 5, 21, 34],
sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);