"use strict";

function* counter() {
    yield 1;
    yield 2;
    yield 3;
}

const numb = counter();

console.log(numb.next());
console.log(numb.next());
console.log(numb.next());
console.log(numb.next());