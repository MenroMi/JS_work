"use strict";

// // function A() { 


// //  }
// // function B() { 



// // }

// // let a = new A;
// // let b = new B;

// // console.log( a ); 


// // ================

// function Accumulator(startingValue) {
    
//     this.value = startingValue;
//     this.read = function() {
//         this.value += 3;
//     }
// }

// const newValue = new Accumulator(5);
// console.log(newValue.value);
// newValue.read();
// console.log(newValue.value);
// newValue.read();
// newValue.read();
// newValue.read();
// console.log(newValue.value);

// ======

// const house = {
//     flats: 5,
//     residents: 10,
//     adress: 'warsaw, centrum',
// };

// console.log(house.flats);
// console.log(house.residents);
// console.log(house?.adress);

// ===================

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
console.log(pow(2, 5));