let firstMassiv = ['Toyota', 'Nissan', ['Hybrid', [1, 2, 3, 4] ,'Electric', 'Gas'] ,'BMW', 'Mercedes'];
// massiv z kilkoma włożonymi massivami
console.log(firstMassiv[2][1][2]); // praca z włożonymi massivami za pomocą index'ów
firstMassiv[2][4] = 'Coś tutaj masz'; // dodanie elementu do massiva
console.log(firstMassiv[2]); // druknięcie elementu
console.log('---------');

const stringForSplit = 'Siema sportowe świry'; // string do pracy

let x = stringForSplit.split(' '); // dzielenie stringa na elementy massiva, gdzie dzieleniem jest spacja
console.log(x);
console.log('ostatni element w massywie: ', x[x.length-1]); // druknięcie ostatniego elementu nowostworzonego elementu
let lastWord = x[x.length-1]; // zmienna z przyswojonym ostatnim elementem massiva
let firstLetter = lastWord[0].toUpperCase() + lastWord.slice(1); 
// zmiana pierwszej litery "połączonych" elementów massiva
console.log(firstLetter, x[1], x[0].toLowerCase());  //druknięcie każdego elementu i ostatni z małej litery

let joinMassivtoString = firstMassiv.join(', '); // łaczymy za pomocą przecinka nasz massiv w string
console.log(joinMassivtoString);
let joinMassivtoString1 = firstMassiv.toString();  
// też łączenie za pomocą tostring, jednak bez wyboru wartości pomiędzy
console.log(joinMassivtoString1); 

// ====================
firstMassiv.push('Dodge'); // dodanie na koniec element 'Dodge'
console.log(firstMassiv);
firstMassiv.pop(); // usuwanie ostatniego elementu
console.log(firstMassiv);

// ====================

firstMassiv.unshift('Cadillac'); // dodaje element na początku
console.log(firstMassiv);
firstMassiv.shift(); // usuwa pierwszy element
console.log(firstMassiv);

// console.log(x.join(' '));

// let i = 0;

// for (i = 0; i < firstMassiv.length; i++) {
//     console.log(i);
// }
// if (i == firstMassiv.length) {
//     console.log('Okej');
// }


// let products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99','Trousers:31.99',  'Shoes:23.99'];
// let joinProducts = products.join(":");
// console.log(joinProducts);
// let productsMassiv = joinProducts.split(':');
// console.log(productsMassiv);

// console.log(joinProducts.indexOf('.99'));


var products = ['Underpants:6.99',
 'Socks:5.99',
 'T-shirt:14.99',
 'Trousers:31.99',
 'Shoes:23.99'];

var i = 0;
 
for(i = 0; i < products.length; i++) {
    console.log(i);
    var subArray = products[i].split(':');
    console.log(subArray);
    var nameProduct = subArray[0];
    var priceProduct = Number(subArray[1]);
    
}


// for(var i = 0; i < products.length; i++) {
//     var subArray = products[i].split(':');
//     var name = subArray[0];
//     var price = Number(subArray[1]);
//     console.log(subArray);
//     console.log(name);
//     console.log(price);
// }

const arr = [1, 2, 3, 4, 5];
const arrObj = {
    1: 1,
    4: 'a',
    3: 3,
};

const b = 'andrzej';
console.log(arrObj);
arrObj[b] = 'hello, bodie';
console.log(arrObj);
console.log(arrObj['andrzej']);
//console.log(arrObj.a);

x = 5;

if (typeof x === 'number') {
    console.log('ok');
} else {
    console.log('nie');
}

const data = [1, 2, 3, 4, 5];
const result = [];

for (let i = 0; i <= 4; i++) {
    result[i] = data [i];
    console.log(result);
}

// let arrayOne = ['Alex','Gomer', 'Holand'];

// let [firstName, secondName] = "Alex Holand".split(' ');

// console.log(firstName, secondName);

const userInfo = {};

[userInfo.name, userInfo.secondName] = 'Alex Holand'.split(' ');

console.log(userInfo);

// ===========================

const animals = ['cats', 'dogs', 'lions', 'crocydile', {birds: ['орёл', 'ястреб', 'воробей']}],
      people = ['man', 'woman', 'girls'];

const arrFirst = animals;
const arrSec = animals;

console.log(animals.concat(people));

// ==================


let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);




