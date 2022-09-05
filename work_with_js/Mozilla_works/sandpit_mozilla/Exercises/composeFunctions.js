// // const compose = (f, g) => x => f(g(x)); // определённое кол-во функций
// const compose = (...fg) => x => fg.reduceRight((second, first) => first(second), x);
// /*
// compose(arg1, arg2)(1)
// отношение функций fog: x = f(g(x));
// gof: x = g(f(x));


// */


// function func(x) {
//     return x > 3 ? true : false;
// }

// function gunc(x) {
//     return x ** 2;
// }

// const comp = compose(func, gunc),
//       x = 1;


// console.log(comp(x));

// =========================


// const compose = (a, b) => x => (a(b(x)));
// // b(x) -> a(b(x));


// function plus(numb) {
//     return numb + 5;
// }

// function minus(numb) {
//     return console.log(numb - 10);
// }


// compose(minus, plus)(10);


// =======================


const compose = (...func) => (...args) => func.reduceRight((s, f) => f(s), args.reduce((one, two) => one+two));

// function compose([...func], [...args]) {
//     const res = func.reduceRight((s, f) => f(s), args.reduce((f, s) => f+s));
//     return res;
// }

compose([addFirst, add1], [1, 2, 3]);

function addFirst(numb) {
    return numb;
}

function add1(numb) {
    return console.log(numb + 1);
}


compose(add1, addFirst)(1, 2, 3);
