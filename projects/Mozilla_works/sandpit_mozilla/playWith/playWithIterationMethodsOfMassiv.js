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
}

function checkFilms(arr) {

    console.log(arr.every(film => "id" in film));


}

function setFilmdIds(arr, checkFilms) {

    let tranformedArray = [];

    for ( let i = 0; i < arr.length; i++) {
        arr[i].id = i;
        tranformedArray.push(arr[i]);
    }

    checkFilms(tranformedArray);

}


setFilmdIds([
    {name: "Joker", rating: 9}, 
    {name: "Batmam", rating: 10}, 
    {name: "Superman", rating: 5}, 
    {name: "Ironman", rating: 3}
], checkFilms);


/*
2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

Пример:

showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
*/

/*
3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

Пример:

setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]
*/


/*
4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)
*/


function mapMethod(arr) {
    
}