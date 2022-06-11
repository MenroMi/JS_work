let firstString = 'My name is John';
const answer = firstString.length; // metoda długości znaków, gdzie puste znaki również się liczą
console.log(`${answer} słów`);

// ==================================

console.log(firstString[firstString.length-1]); // zwraca ostatni znak stringa
console.log(firstString[0]); // zwraca pierwszy znak stringa

// ==================================

console.log(firstString.indexOf('John')); // zwraca index podanego w nawiasach stringa w ciągu znaków
console.log(firstString.indexOf('Johny')); // zwróci nam -1, co równa się braku podanego wartości

// dzięki tej metodzie można wylistować wszystkie wartości, które na przykład zawierają podane słowo
if ( firstString.indexOf('John') !== -1 ) { // tutaj dzięki warunkowi sprawdzamy czy są takie wartości
    console.log('Jest takie imię!');
}
if ( firstString.indexOf('John') === -1 ) { // tutaj dzięki temu że nie są równe, bo jest taka wartość w stringu
    console.log('Jest takie imię!'); // drukuje się else
} else {
    console.log('Błąd!');
}

// ==================================

console.log(firstString.slice(11, 15)); // jak znane są indexy czego potrzeba wydzielić z ciągu, to
// za pomocą metody slice można wyciąć podaną wartość

// ==================================

console.log(firstString.toLowerCase()); // zwraca ciąg w dolnym registrze
console.log(firstString.toUpperCase()); // zwraca ciąg w górnym registrze

// ==================================

console.log(firstString.replace('John', 'Cyryl'));

// ==================================

function sum(a, b) {
    return a + b;
}

console.log(`2 + 3 = ${sum(2, 3)}.`); // 

// ==================================

// loop while szukający wszystkie pozycje występowania podanego znaczenia

let str = 'Ослик Иа-Иа посмотрел на виадук'; // baza, gdzie szukamy
let target = 'Иа'; // znaczenie, które szukamy
let pos = 0; // pozycja szukanego targetu
let count = 0;

while (true) {
    let foundPos = str.indexOf('Иа', 1);
    if ( foundPos === -1) break;
    count++;

    console.log(`Znaleziono tutaj: ${foundPos}. W sumie występuje tyle razy: ${count}`);
    // for (let i = 0; i < 1; i++) {
    //     const newObj = {};
    //     newObj.foundPos = foundPos;
    //     console.log(newObj.foundPos);
    // }
    pos = foundPos + 1;
}

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// ==================================

let newWord = "Hi, my name's Kiryl";

console.log(newWord.slice(1, 6)); // metoda slice(star[, end]) - wycina od start do end ( może być bez end);
console.log(newWord.slice(-5)); // 
console.log(newWord.substr(7, 6));



// function checkSpam(str) {
//     if ( str === 'viagra') {
//         return true;
//     } else if (str == 'xx')
// }

let newStr = '';

for ( let i = 65; i <= 220; i++) {
    newStr += String.fromCodePoint(i);
}

console.log(newStr);


// =================
const c1 = -1.4; // Math.ceil = zaokrągla w górę,
const c2 = -1.6; // Math.floor - zaokrągla w dół,
const c3 = -6.7; // Math.round - zaokrągla do najbliższej całej liczby,
const c4 = -1111.44444; // Math.trunc - usuwa liczbę po kropce
const c5 = 3;

console.log(`1. ${Math.ceil(c1)},\n2. ${Math.floor(c2)},\n3. ${Math.round(c3)},\n4. ${Math.trunc(c4)},\n5. ${c5};`);


let strForExample = 'Hello, Kiryl'; 
let strForExample2 = 'hello, Kiryl'; 
console.log(strForExample.localeCompare(strForExample2));

console.log(strForExample.substring(5, 1));
console.log("Ö".codePointAt(0));
console.log(String.fromCodePoint(75));