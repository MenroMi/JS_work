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