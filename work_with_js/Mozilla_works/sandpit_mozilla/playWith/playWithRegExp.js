// const regexp = new RegExp('szablon', 'flaga');  // classical syntax
// const regexp = /szablon/igm;

// i - вне зависимости от регистра
// g - global - ищет все вхождения
// m - многострочный режим

// str.match(/szablon/flagi); - возвращает массив
// str.replace(/szablon/flagi, 'wartość końcowa') - заменяет значения

// console.log('Siema Kolego'.replace(/Kolego/i, "$& i Koleżanko!" ));
// console.log("Люблю HTML".replace(/HTML/, "$& и JavaScript"));
// console.log("I love".replace(/love/i, "$& You!"));

// console.log("+(48)-883-931-179".match(/\d/g).join(''));
// console.log('I love you!'.match(/\w\w\w\s/ig).join(''));
// console.log("+(48)-883-931-179".replace((/\D/g), ''));

// const regexp = /DM.19/s;
// console.log('DM-19'.match(regexp)[0]); //DM.19 -> DM-19
// // console.log('DM19'.match(regexp)[0]); //null
// console.log("DM\n19".match(regexp)); //null

// ==========================

function camelCase(exp) {


    
    exp.replace(/\W/g, '');
    exp.replace();

}

console.log(camelCase("the_stealth_warrior"));
console.log(camelCase("The-Stealth-Warrior"));

// ^[A-Z]

// ======================

// function XO(str) {
//     let x = 0,
//         o = 0;
    
//     if (str == '') {
//         return false;
//     }

//     str.match(/[xo]/ig).map(el => el.toLowerCase() == 'x' ? x++ : o++);

//     console.log(x == o ? true : false);

//     // console.log(str.match(/[xo]/ig).length % 2 == 0 ? true : false);
// }

// XO('');
// XO('xxxooo');
// XO('xxmowmo');
// XO('xxaaa0o');
// XO('Oox');


// ===================

// let regexp = /\.+/g;
// console.log( "Привет!... Как дела?.....".match(regexp) );


