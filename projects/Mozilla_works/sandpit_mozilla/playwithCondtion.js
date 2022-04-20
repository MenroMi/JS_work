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

console.log(!1 && 5 && 7 && 4);
console.log("1" && 2);
console.log(null && 4);
console.log("1" && "3");
console.log(0 && false);
console.log(0 && 2);
console.log(true && false);



const burger = 1, fries = 0, cola = 1;

if (burger === 2 && fries && cola) {
    console.log('Jemy tu');
} else {
    console.log('fałsz');
}

console.log((burger === 1 && fries && cola === 1));
