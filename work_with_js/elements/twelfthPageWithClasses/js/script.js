"use strict";

class Cars { // class == function => true
    constructor(mark, model, fuel) {
        this.mark = mark;
        this.model = model;
        this.fuel = fuel;

    }

    showProps() {
        console.log(`Marka samochodu: ${this.mark};\nModel: ${this.model};\nRodzaj paliwa: ${this.fuel};`);
    }
}

class RestOfPropCars extends Cars {
    constructor(mark, model, fuel, color, engine, version) {
        super(mark, model, fuel);
        this.color = color;
        this.engine = engine;
        this.version = version;
    }

    showRestProps() {
        console.log(`Color samochodu: ${this.color};\nWersja samochodu: ${this.version};\nTyp silnika: ${this.engine};`);
    }
}

const bmw = new RestOfPropCars('BMW', 'E32', 'Benzyna', 'czerwony', 'SILNIK KOMPLETNY 2.0 170KM N47B20A', 'Europejska');

bmw.showProps();
bmw.showRestProps();

// ===============================


const bycicle = {
    name: 'bycicle',
    wheel: 3,
    light: true,
    speed: "20km/h",
    maxSpeed() {
        console.log(`Max. speed of ${this.name}: ${this.speed}`);
    }
};


let motobike = Object.create(bycicle);
motobike.name = 'motobike';
motobike.transmission = true;
motobike["number of gears"] = 5;
motobike.speed = '150km/h';

let car = Object.create(motobike);
car.name = 'car';
car.wheel = 4;
car.roof = true;

bycicle.maxSpeed();
motobike.maxSpeed();

// ===================================

function Person(name) {
    this.name = name + ' Joker';
}

console.log(Person);

Person.prototype.sayName = function() {
    console.log(this.name);
};

const andrew = new Person('Andy');

andrew.sayName();


// =======================

function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
};


function Teacher(first, last, age, gender, interests, subject) {
    
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;

}

Teacher.prototype = Object.create(Person.prototype); // argumentem jest obiekt, który stanie prototypem
// dla nowego obiektu

const john = new Teacher('John', 'Bond', 34, 'M', 'bowling', 'history');

john.greeting();
console.log(john.subject);

// console.log(Person);
// console.log(Teacher);

// ========================

const Animals = class A { /* code */}; // taki zapis jest przydatny w przypadku gdy konstruktor trzeba
// zapisać jako właściwość obiektu
const obj = {
    Person,
};

// =========================

let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
};
  
const func = user.sayHi.bind(user);

setTimeout(func, 1000); /*
Это произошло потому, что setTimeout получил функцию sayHi отдельно от объекта user (именно здесь функция и потеряла контекст).
*/

// two solutions

/*

FIRST

setTimeout(function() {
    user.sayHi();
}, 1000);

Теперь код работает корректно, так как объект user достаётся из замыкания, а затем вызывается его метод sayHi.
*/

/*
SECOND

const func = user.sayHi.bind(user);

func();

setTimeout(func, 1000);

Здесь func.bind(user) – это «связанный вариант» func, с фиксированным this=user.

*/