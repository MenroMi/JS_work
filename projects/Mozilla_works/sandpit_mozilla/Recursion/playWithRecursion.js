// function recFac(x, n) {
//     return (n === 1) ? x : x * recFac(x, n-1);

//     // 2 * 2**4
//     // 2 * 2**3
//     // 2 * 2**2
//     // 2 * 2**1
//     // 2 * 2**1 = 4
//     // 2 * 2**2 = 8
//     // 2 * 2**3 = 16
//     // 2 * 2**4 = 32
    


// }

// console.log(recFac(2, 5));
// console.log(Math.pow(2, 3));

// // ================

// var range = function(startNum, endNum) 
// {
//   if (endNum === startNum) 
//   {
//     return [startNum + 1];
//   } 
//   else 
//   {
//     var list = range(startNum, endNum - 1);
//     list.push(endNum - 1);
//     return list;
//   }
// };

// console.log(range(3,9));

//===============================


const elementId = document.body.children;
console.log(elementId);
