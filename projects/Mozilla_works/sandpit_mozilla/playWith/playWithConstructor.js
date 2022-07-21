"use strict";

function Animals(age, country) { // nazwa z duże litery
    // this (obiekt, który się tworzy przy wyłowaniu funkcji -konstruktora) = {}; niewidocznie
    this.age = age; //lion.age
    this.country = country; // lion.country
}

const lion = new Animals(15, 'Africa'); // zmienna jest nowym obiektem w konstruktorze

console.log(lion.age);
console.log(lion.country);
console.log(lion);


// ===============

const user = {};

function FirstCon() {
    return user;
}
function SecondCon() {
    return user;
}

console.log(FirstCon() == SecondCon());

// ================


function CalculateNumbers() {

    this.firstNumber = 0;
    this.secondNumber = 0;

    this.read = function() {
        this.firstNumber = 3;
        this.secondNumber = 5;
        setTimeout(() => {console.log('Значения сохранены');}, 500);
    };

    this.sum = () => {
        setTimeout(() => {
            console.log(`Sum = ${this.firstNumber + this.secondNumber}`);
            }, 2000);
    };

    this.mul = () => {
        setTimeout(() => {
                console.log(`Mul = ${this.firstNumber * this.secondNumber}`);
            }, 3000);
    };


}

const values = new CalculateNumbers();

values.read();
values.sum();
values.mul();


// ==================

const obj = {
    a: 10,
    b: 20,
    sum() {
        console.log(this); //obj
        function func() {
            console.log(this); // undefined
        }
        func();
    }

};

obj.sum();

// ===================

function whatEatEagle(food) {
    console.log(`${this.animal} eat ${food} `);
}

const typeOfAnimal = {
    animal: 'Eagle',
};

const eatEagle = whatEatEagle.bind(typeOfAnimal); // забиндили контекст вызова
eatEagle('mouse');

// ==========


const arrowFunc = {
    item: 'arrow',
    chooseItem() {
        const sayItem = () => {
            console.log(this.item); // ссылается на своего родителя
            // у стрелочной функции нет своего контекстного вызова
        };
        sayItem();
    }
};

arrowFunc.chooseItem();

// =============

const double = a => a * 2;

console.log(double(2));