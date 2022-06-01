"use strict";

const restorantData = {
    menu: [
    {
        name: 'Salad Caesar',
        price: '14$'
    },
    {
        name: 'Pizza Diavola',
        price: '9$'
    },
    {
        name: 'Beefsteak',
        price: '17$'
    },
    {
        name: 'Napoleon',
        price: '7$'
    }
    ],
    waitors: [
    {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    return prop ? answer = 'Закрыто' : answer = 'Открыто';
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {

    return 'Цена ниже средней';
    } else {
    return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[2], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {

    let copy = {};
    for ( let key in data) {
        if ( typeof(data[key]) === 'object' ) {
            copy[key] = data[key].slice();
        } else {
            copy[key] = data[key];
        }
    }

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

const res = transferWaitors(restorantData);

console.log(res);
console.log(restorantData);