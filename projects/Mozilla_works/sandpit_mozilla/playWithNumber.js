let randomNumber = Math.floor(Math.random() * 200) + 1;
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


let massivWithPlace = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11,12], [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24], [25, 26, 27, 28], [29, 30, 31, 32], [33, 34, 35, 36]];
let isInteger = 5;

console.log(isInteger.includes(massivWithPlace));

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