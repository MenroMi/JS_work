let randomNumber = Math.floor(Math.random() * 200) + 1; // random number
console.log(typeof randomNumber + ' --- ' + randomNumber);
const randomNumber1 = (Math.random() * 200) + 1;
console.log(typeof randomNumber1 + ' --- ' + randomNumber1);

console.log('------------');

const integerNumber = 10;
console.log(typeof integerNumber + ' --- ' + integerNumber);
const floatNumber = 10.1005;
console.log('Typ zmiennej: ' + typeof floatNumber + ' =', randomNumber % integerNumber);
console.log(1001 % 4);


console.log(195 % 201); 
// if value which on right side is greatest than on left side that give you value which you want
console.log(250 % 251);
console.log(150 % 151);

console.log((1000 / 4) - 100);
console.log((500 - 200) / 2);
const x = 50 * 4;
console.log(x);
const y = (50 * 3) + 50;
console.log(y);

// ========================

// dzięki temu kodowi możesz sprawdzić czy jest liczba całkowita(true) czy float(false)
// jednak wadą jest to, że funkcja również uznaje za true puste stringi
const funValue = function(x) {
    if ((x % 1 === 0) === true) {
        console.log('ok', Boolean(x));
    } else {
        console.log('nie ok', Boolean(x));
    }
};

funValue(2.0);

// ============================

// dzięki tej zrobić to samo + weryfikuje typ zmiennej, co blokuje puste stringi
// dodatkowo sprawdza czy liczba jest skończona czy nie
// i na koniec sprawdza czy jest floatem czy integerem

Number.isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' &&
      isFinite(value) &&
      Math.floor(value) === value;
  };

console.log(Number.isInteger(65));

// ==========================

function getCoupeNumber(number) {
    if(Number.isInteger(number) && number > 1 && number < 37){
        let result = Math.ceil(number / 4);
        return result;
    } else if (Number.isInteger(number) && number > 36 || number === 0){
        return 'Таких мест в вагоне не существует';
    }
    return 'Ошибка. Проверьте правильность введенного номера места';
}

console.log(getCoupeNumber(2));


function getCoupeNumber(num) {
    let seatNum = 1;
    let coupeNum = 1;
    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (num === 0 || num > 36) {
        return `Таких мест в вагоне не существует`;
    } else {
         for (let i = 1; i < 10; i++) {
            for (let k = 1; k < 5; k++) {
                if (num === seatNum) {
                    return coupeNum;
                }
                seatNum++;
            }
            coupeNum++;
        }
    }
}

console.log(getCoupeNumber(23));

const numberForCeil = 4;
console.log(Math.ceil(numberForCeil / 4));


let emptyString = '';
console.log(emptyString == false);

// ================

console.log(typeof(1e6));
console.log([] && true);
console.log(12e-7);
console.log(5e-6);
const numb = 2.323;
console.log(numb.toFixed(0));

let numbOne = 1082;
console.log(numbOne.toString(36));
console.log(typeof((255).toString(36)));
console.log(parseInt('a123', 16));
console.log(Math.round(Math.random() * 100) + 1);

// =====================

const newFunc = (a, b) => {
    let res = a * b;
    return res;
};

console.log(newFunc(5, 5));

console.log(parseFloat(6.35));

let i = 0;
while (i != 10) {
  i += 0.2;
}

console.log((6.35).toFixed(20));