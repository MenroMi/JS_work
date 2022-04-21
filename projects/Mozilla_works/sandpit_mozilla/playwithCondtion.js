// const number = 100;

// (number >= 100) ? console.log('Tak trzymaj!') : console.log('Nie, niestety');

// switch(number) {
//     case 99:
//         console.log('Prawie!');
//         break;
//     case 100:
//         console.log('Zgadza się!');
//         break;
//     default:
//         console.log('Próbuj!');
//         break;
// }

var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}

let number = 1;
let welcomePolish = 'Siema, byku!';

switch (welcomePolish.length >= number) {
    case true:
        console.log('Yees!');
        break;
    default:
        console.log('Coś nie zadziałało');
}
// var foo = 1;
// var output = 'Output: ';
// switch (foo) {
//   case 0:
//     output += 'So ';
//   case 1:
//     output += 'What ';
//     output += 'Is ';
//   case 2:
//     output += 'Your ';
//   case 3:
//     output += 'Name';
//   case 4:
//     output += '?';
//     console.log(output);
//     break;
//   case 5:
//     output += '!';
//     console.log(output);
//     break;
//   default:
//     console.log('Please pick a number from 0 to 5!');
// }

console.log( NaN || 2 || undefined ); // 2
console.log( NaN && null && undefined ); // NaN
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || !3 ); // false
console.log( 25 || null && !3 ); // 25
console.log(0 && 2); // 0
console.log(true && false); // false

console.log( NaN || null || !3 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // 5

const burger = 1;
const cola = 3;
const fries = 3;
const nuggets = 2;


if ( burger === 1 && fries === 3 || cola === 2 && nuggets === 1 ) {
    console.log('Tak jest');
} else {
    console.log('Wynocha');
}

console.log( burger === 1 && fries === 3 || cola === 2 && nuggets === 1 );

