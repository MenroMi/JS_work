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
// dateExer.setUTCDate(3);
console.log(dateExer);
console.log(dateExer.getDate());

function getWeekDayIndex() { 
    /*
    funkcja w której randomowo wybieramy liczbę(do 7), która później za pomocą indeksu 
    wyciąga dzień tygodnia z tablicy
    */
    let ourDate = Math.floor(Math.random() * 7);

    const arrDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return arrDay[ourDate];

}

// console.log(getWeekDayIndex());

// for (let i = 0; i < 10; i++) {
//     console.log(getWeekDayIndex());
// }

function getWeekDayInteration() {
        /*
    funkcja w której randomowo wybieramy liczbę(do 7), która później za pomocą iteracji 
    wyciąga dzień tygodnia z tablicy
    */
    let ourDate = Math.floor(Math.random() * 7);

    const arrDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    for ( let i = 0; i <= arrDay.length; i++) {
        if (ourDate == i) {
         return arrDay[i];
        }
     }
}

function bench(f) {
    /*
    tworzymy benchmark, wyliczając prędkość działania w millisekundach
    */
    let start = Date.now();
    let some = 0;
    for (let i = 0; i < 100000; i++) {
        some += f;
    }
    let end = Date.now();
    
    return end - start;

}

let funcFirst = [];
let funcSecond = [];

for ( let i = 0; i < 10; i++) {
    /*
    robimy kilka potwórzeń dla większej prawidłowości naszego wyliczenia
    */
    funcFirst.push(bench(getWeekDayIndex));
    funcSecond.push(bench(getWeekDayInteration));
}

console.log(`first: ${funcFirst} millisec`);
console.log(`second: ${funcSecond} millisec`);

function addAllResult(arr) {
    /*
    szukamy róźnicę między prędkościami
    */
    let res = 0;

    for ( let numb of arr) {
        res += numb;
    }
    return res;
}

console.log(`first result: ${addAllResult(funcFirst)} in milliseconds.`);
console.log(`second result: ${addAllResult(funcSecond)} in milliseconds.`);
console.log(`different result: ${addAllResult(funcSecond) - addAllResult(funcFirst)} in milliseconds.`);

// ====================

const actualTime = new Date(),
      startTime = new Date(0),
      time = Date.now(); // czas w millisekundach


console.log(Date.parse(actualTime));
console.log(startTime);
console.log(time);

// =====================

startTime.setDate(50);
console.log(startTime);

// =====================

const datePast = "1938-05-04";

console.log(actualTime.getTime());
console.log(actualTime.getUTCHours());
console.log(actualTime.getTimezoneOffset());

// =====================

const pastTime = "1999-01-01",
      actuallyTime = Date.now();


function takeDate(date1, date2) {
    const t = date2 - Date.parse(date1),
          days = Math.floor((t / (1000 * 60 * 60 * 24))),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor(((t / 3600) % 60)),
          seconds = Math.floor(((t / 1000) % 60));

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}


console.log(takeDate(pastTime, actuallyTime));


// ===================


function addZero(t) {
    return (t < 10) ? `0${t}` : t;
}

const d1 = new Date("1954-04-05T21:30:00.000Z");
console.log(d1);

function getDateNow(t) {

    const arrDate = [];
    let date = ``;

    const year = t.getFullYear(),
          month = t.getMonth(),
          days = t.getDate(),
          hours = t.getHours(),
          minutes = t.getMinutes();
          
    arrDate.push(year);      
    arrDate.push(month);
    arrDate.push(days);
    arrDate.push(hours);
    arrDate.push(minutes);

    arrDate.forEach((time, i) => {
        if (i >= 3 && i < 4) {date += `${addZero(time)}:`;
        } else if (i < 3){date += `${addZero(time)}.`;
        } else {date += `${addZero(time)}`;}
        
    });

    return date;

}

console.log(getDateNow(d1));
