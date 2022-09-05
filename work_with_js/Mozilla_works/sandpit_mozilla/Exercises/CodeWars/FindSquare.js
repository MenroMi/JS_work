/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
 Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/

function findNextSquare(sq) {
  
    let sqrt = Math.floor((Math.sqrt(sq))); // we find square root and calculate floor value
  
    return sqrt**2 !== sq ?  -1 : Math.pow(++sqrt,2); // here we checked square of the number, and take
    // answer that this is perfect square or not

}

console.log(findNextSquare(319225));


// ==============

// function findNextSquare(sq) {
//     return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }

// ==============

// function findNextSquare(sq) {
//     var number = Math.sqrt(sq);
//     if(Math.round(number) === number) {
//       return Math.pow(++number, 2);
//     }
//     return -1;
// }