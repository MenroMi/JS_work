
var newProperty = "example";

const options = {
  name:'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function() { // obiekt stworzony przez usera
    console.log('Test');
  }
};

options[newProperty] = 5; // możemy włożyć dowolną zmienną do obiektu,
// wartość zmiennej będzie kluczem, a wartością tworzonego klucza będzie
// wartość wywołania dodawanego klucza.

console.log(options.example);

var rabbit = {};
rabbit.run = function(n) {
    console.log("Пробежал "+n+" метров!");
};
rabbit.run(5);  // Пробежал 5 метров
rabbit.run(7);  // Пробежал 7 метров

console.log(rabbit);

// =======================

var o = {
  a:5,
  b:true
};
for (var key in o) {
    console.log(key + ':' + o[key]);
}



// const arrayOfObj = Object.keys(options);

// for (let i = 0; i < arrayOfObj.length; i++) {
//     let res = arrayOfObj[i]; 
//     console.log(res);
// } 

// console.log(options.name);

// delete options.name;
// console.log(options);

// let numbersOfProperty = 0;

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     numbersOfProperty++;
//     for ( let i in options[key] ) {
//       console.log(`Свойство ${i} значение имеет ${options[key][i]}`);
//     }
//   } else {

//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   numbersOfProperty++;
//   }
// }

// console.log(`Кол-во свойств в объекте: ${numbersOfProperty}`);