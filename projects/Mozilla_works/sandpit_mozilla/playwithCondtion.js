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
      break;
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}