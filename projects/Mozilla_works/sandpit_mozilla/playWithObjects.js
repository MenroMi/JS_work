
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


// =======================


const propertyForThisObj = {
  size: {
    width: 100,
    height: 200
  },
  items: ['Cake', "Donut"],
  extra: true,
};

let {
  size: {
    width, 
    height,
  }, 
  items: [items1, items2],
  title = 'Menu'
} = propertyForThisObj;

console.log(width);
console.log(height);

let option1 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width присваиваем в w
  height: h = 200, // height присваиваем в h
  items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
}) {
  console.log( `${title} ${w} ${h}` ); // My Menu 100 200
  console.log( item1 ); // Item1
  console.log( item2 ); // Item2
}

showMenu(option1);


// let counter = 0;

// for ( let key in myBack) {
//   if ( typeof(myBack[key]) === 'object' ) {
//     counter++;
//     console.log(`${counter}. ${key} имеет следующие свойства:`);
//     for (let i in myBack[key]) { 
//       console.log(`\t--- Свойство: ${i} имеет значение: ${myBack[key][i]}`);
//       } 
//     } else {
//     counter++;
//     console.log(`${counter}. Свойство: ${key} имеет значение ${myBack[key]}`);
//   }
// }




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