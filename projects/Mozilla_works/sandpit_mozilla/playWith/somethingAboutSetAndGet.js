const nameOfObj = {
  firstThing: 'apple',
  secondThing: 'banana',
  thirdThing: 'cucumber',
  get fouthThing() {
    return `${this.firstThing} + ${this.secondThing} - ${this.thirdThing}`;
  },
  set fouthThing(value) {
    [this.firstThing, this.secondThing] = value.split(' ');
  }
};


console.log(nameOfObj.fouthThing);
nameOfObj.fouthThing = 'Pomidor Orange';
console.log(nameOfObj.fouthThing);

console.log(nameOfObj);


// =======================

const a = 'Siemka sportowe świry';
const b = a.split('').reverse();
console.log(b.join(''));


// ========================
// ZADANIE NA REVERSE STRINGA

function reverseString(str) {

  if ( str === '' || typeof(str) !== 'string') {
    return 'Ошибка!';
  } else {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
      res += str[i];
      }
      return res;
  }

}

console.log(reverseString(0));

// ================
// ITERACJA I USUNIĘCIE TAKICH SAMYCH ELEMENTÓW TABLICY
// pierwsze rozwiązanie:


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  
  let result = '';
  arr.length === 0 ? 'Нет доступных валют' : result = 'Доступные валюты:\n';

  arr.forEach(function(cur) {
    if ( cur !== missingCurr) {
      result += ` ${cur}\n`;
    }
  });

  // drugie rozwiązanie:
  
// if ( arr.length == 0) {
//   return "Нет доступных валют";
// } else {
//   for (let key of arr) {
//     if ( key !== missingCurr ) {
//       result += `${key}\n`;
//     } else {
//       continue;
//     }
//   }
  
  return result;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// ==================




