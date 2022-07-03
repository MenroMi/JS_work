"use strict";

const now = new Date(0);

// =================
// we can assign new property for our date

console.log(now);
console.log(now.setMonth(now.getMonth() + 10));
console.log(now);

// =================
// we can change date with help negative integer that make past date

now.setDate(1);
now.setDate(0);
console.log(now);


// =====================================

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTime());
// console.log(now.getTimezoneOffset());

// ======================================
// lite benchmarks

let start = Date.now(); // actual date in milliseconds

for ( let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = Date.now();

console.log(`${end - start} milliseconds`);

// =======================================

function subtractDate(date1, date2) {
    return date2 - date1;
}

function substractDateGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function benchSpeedRealize(func) {

    let date1 = new Date(0);
    let date2 = new Date();
    
    let start = Date.now();
    for ( let i = 0; i < 100000; i++) {
        func(date1, date2);
    }

    return Date.now() - start;

}

let arrTimeFirst = [];
let arrTimeSecond = [];

for ( let i = 0; i < 10; i++) { // musimy mieć kilka wyników ze sprawdzających funkcji, 
    //żeby wynik był bardziej prawidłowy
    arrTimeFirst.push(benchSpeedRealize(subtractDate));
    arrTimeSecond.push(benchSpeedRealize(substractDateGetTime));
}

console.log(`First function: ${arrTimeFirst} milliseconds`);
console.log(`Second function: ${arrTimeSecond} milliseconds`);

// let resDate = date2 - date1;

// console.log(resDate); // return property in millisecond
// console.log(date1);
// console.log(date2);

// =====================

const dateExer = new Date(2012, 0, 3);
dateExer.setUTCDate(3);
console.log(dateExer);
console.log(dateExer.getDate());

function getWeekDay(date) {

    const arrDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    for ( let i = 0; i < arrDay.length; i++) {
       if (date.getDate() == i) {
        return arrDay[i];
       }
    }
}

console.log(getWeekDay(dateExer));