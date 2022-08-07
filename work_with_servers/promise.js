"use strict";

setTimeout(() => {
    console.log('Запрос данных...');

}, 500);

const req = new Promise(function(resolve, reject) {

    setTimeout(() => {
        console.log('Подготовка...');
    
        const product = {
            title: 'TV',
            price: 2000
        };
    
    resolve(product); 
    }, 2000);
       
});

req.then((prod) => { // argumentem jest rezultat początkowego promisu
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            prod.status = 'order';
            resolve(prod);
        }, 2000);
    });


}).then(prod => {
    console.log(prod);
    return new Promise((resolve, reject) => {
        prod.price = 35;
        prod.status = 'in stock';

        resolve(prod);


    });
}).then(res => {
    setTimeout(() => {
        console.log('...');
        setTimeout(() => {
            console.log(res);
    
        }, 1500);
    }, 1500);
});

