/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/

"use strict";

const exampleArray = ['Hello', 'Again', 'World!', 'Nice', 'to', 'meet', 'you!'];

function removeEverySecElem(arr) {

    let res = [];
    for (let i = 0; i < arr.length; i++) {

        ( i % 2 == 0 ) ? res.push(arr[i]) : 'Negative';

    }

    return res;

}

console.log(removeEverySecElem(exampleArray));

//===================


// function removeEveryOther(arr){
//     var newArr=[];
//   for (var i = 0; i < arr.length; i+=2){
//     newArr.push(arr[i]);
//     }
//   return newArr;
//   }