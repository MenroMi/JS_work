/*

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

*/


function onlyVowels(string) {

    let count = 0;
    let arrayVowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for ( let i = 0; i < string.length; i++) {
        for (let vowel of arrayVowels) {
            if (string[i] == vowel) {
                count++;
            } else {
                continue;
            }
        }
    }
    return count;
}

console.log(onlyVowels('We will consider'));

// =======================

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }