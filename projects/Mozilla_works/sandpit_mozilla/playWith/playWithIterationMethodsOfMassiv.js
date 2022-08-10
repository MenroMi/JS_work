// 1. forEach() - nie zwraca massiv
// 2. filter()

// const names = ['John', 'Andrew', 'Ivan', 'Ksenia'];

// const shortNames = names.filter(item => {
//     return item.length < 5 ? item : false;
// });

// console.log(shortNames);

// 3. map()

// const answers = ['iVan', 'ANN', 'FullNamE'];

// const lowerAnswers = answers.map(item => `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`);

// console.log(lowerAnswers);

// 4. every/some 

// const someElem = [4, 'qwerty', 'hello'];
// console.log(someElem.some(item => isNaN(item)));

// const someElem = [4, 2, 7];
// console.log(someElem.every(item => +item));

// 5. reduce

// const variable = [1, 2, 3, 4, 5];

// console.log(variable.reduce((sum, current) => sum + current));

// const strings = ['apple', 'orange', 'plum'];

// const res = strings.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// const func = (object, value) => {
//     return Object.keys(object).find(key => object[key] === value); // find keys from massiv by value
// };

// console.log(func(obj, 'persone'));
