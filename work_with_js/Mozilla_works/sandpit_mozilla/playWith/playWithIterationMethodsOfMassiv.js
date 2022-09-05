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


// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const func = (object, value) => {
//     return Object.keys(object).find(key => object[key] === value); // find keys from massiv by value
// };

// console.log(func(obj, 'persone'));

// ===========================================

/*
1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...
*/

function findFilmsMoreThanEight(arr) {
    // return arr.filter(film => film.rating >= 8); // 1
    // return arr.map(film => film.name).reduce((sum, current) => `${sum}, ${current}`); 2
    // return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

function checkFilms(arr) {

    console.log(arr.every(film => "id" in film));
    console.log(arr);

}

function setFilmdIds(arr) {

    arr.map((item, i) => item.id = i);
    
    return checkFilms(arr);
    // let tranformedArray = [];

    // for ( let i = 0; i < arr.length; i++) {
    //     arr[i].id = i;
    //     tranformedArray.push(arr[i]);
    // }

    // checkFilms(tranformedArray);

}


setFilmdIds([
    {name: "Joker", rating: 9}, 
    {name: "Batmam", rating: 10}, 
    {name: "Superman", rating: 5}, 
    {name: "Ironman", rating: 3}
]);


const store = {
    chips: 5,
    cola: 3,
    friuts: 8,
    milk: 2
};


function calcValues(obj) {

    let values = Object.entries(obj).flat(1);
    
    return values.map(item => typeof item == "number" ? item + 2 : item);


}

console.log(calcValues(store));

// ==================================


const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = arr => {
    return arr.map(item => item.amount >= 0 ? item.amount : 0).reduce((sum, curr) => sum + curr, 0);
};

const  getTotalIncomeAmount = data => {
    return data.some(item => item.amount <= 0) === true ? data.map(d => d.amount).reduce((sum, curr) => sum + curr, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));

// const res = arr => {
    
// let result = 0;

// for ( let i = 0; i < arr.length; i++) {
//     result += arr[i].amount;
// }
// return result;
// };

// console.log(res(funds));