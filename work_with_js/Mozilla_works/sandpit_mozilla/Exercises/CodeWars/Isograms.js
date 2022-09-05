/* 
7 kyu
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/


const isograms = (str) => {

    let arrStr = str.toLowerCase().split('');


    // if (str.split('') == '') {
    //     return true;
    // } else {

    //     let res = [];

    //     for (let letter of str.split('')) {

    //         if ( isFinite(letter)) {
    //             return false;
    //         } else {
    //             res.push(letter);
    //         }
    //     }

    //     return res.every((letter, pos, arr) => arr.indexOf(letter) == pos);
    // }
    
    if (arrStr == '') {
        return true;
    } else {
        return arrStr.every((letter, pos, arr) => arr.indexOf(letter) == pos);
    }


};

console.log(isograms("moOse"));


// ===================


// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }

// ===================

// function isIsogram(str){ 
//     return !/(\w).*\1/i.test(str);
// }