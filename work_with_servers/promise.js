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
            console.log('Добавляем новые свойства');
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

// ===========================


const car = new Promise((resolve, reject) => {

    setTimeout(() => {

        const audi = {
            model: "rs8",
            year: 1998,

        };

        resolve(audi);

    }, 2000);

}).then(infoAboutCar => {

    setTimeout(() => {
        console.log(infoAboutCar);
    }, 2000);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
                
        infoAboutCar.quantity = 4;
        infoAboutCar.status = 'in stock';
        resolve(infoAboutCar);
        
        }, 2000);
    });

}).then(res => {
    setTimeout(() => {
        console.log(res);
    }, 2000);
});

// ==============================

const promise = new Promise((resolve, reject) => {

        resolve(`First...`);


}).then(res => {
    console.log(res);
    return res;
}).then(res => {
    setTimeout(() => {
    console.log(res);
    }, 2000);
    return res += `Second...`;

}).then(res => {
    setTimeout(() => {
    console.log(res);
    }, 3000);
    return res += `Third...`;
});

// =====================

const p1 = new Promise((resolve, reject)=> {
        console.log('Начало...');

        setTimeout(() => {

            resolve("Загрузка...");

        }, 2000);


}).then((item) => {
    console.log(item);
    setTimeout(() => {
        console.log('Уже почти...');
    }, 2000);

    return item;

}).then(() => {

    setTimeout(() => {
        console.log('Уже-уже...');
    }, 3000);

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Пол шишички...');

            reject();
        }, 4000);

    });
}).catch(() => {
    setTimeout(() => {
        console.error('Ошибка =)');

    }, 2000);
});

// ===============

const test = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

test(2000).then(() => {
    console.log('done - 2000 ms.');
});
test(3000).then(() => {
    console.log('done - 3000 ms.');
});