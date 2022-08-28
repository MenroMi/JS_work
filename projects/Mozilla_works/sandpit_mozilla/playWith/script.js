'use strict';



// ===============================

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         return `Имя: ${this.name}, возраст: ${userAge}`;
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 100) {
//             userAge = age;
//         } else {
//             console.log('Ошибка! Недопустимое значение!');
//         }
//     };

// }

// ====================================

class User {

    #surname;

    constructor(name, age, surname) {
        this.name = name;
        this._age = age; // lodash wykorzystywany po to, by określić prywatną właściwość classa
        this.#surname = surname;
    }



    say() {
            return `Имя: ${this.name} ${this.#surname}, возраст: ${this._age}`;
        }

    // get age() {
    //         return this._age;
    //     }

    // set age(age) {
    //         if (typeof age === 'number' && age > 0 && age < 100) {
    //             this._age = age;
    //         } else {
    //             console.log('Ошибка! Недопустимое значение!');
    //         }
    //     }


    get secondname() {
        return this.#surname;
    }

    set secondname(surname) {
        if (surname.search(/\D/g)) {
            this.#surname = surname;
        } else {
            console.log('Not a string!');
        }
    }
     
}

const alex = new User('Alex', 25, 'Johan');

console.log(alex.secondname); // getter
alex.age = 101; // setter
alex.age = 89; // setter
alex.secondname = 'Hoker1';
console.log(alex.say());

// =============================


class Animal {

    constructor(kide, age, food) {
        this.#kide = kide;
        this.age = age;
        this.food = food;
    }

    info() {
        return `${this.#kide} eat only ${this.food}. They lived are ${this.age} years.`;
    }
}

const dog = new Animal("Canidae", 20, 'chicken');

dog.#kide = 'felidae';

console.log(dog.info());

// ================

// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
//     get fullName() {
//       return this.firstName + ' ' + this.lastName;
//     }
// }

// const kiryl = new Person('Kiryl', 'Honker');

// console.log(kiryl.fullName);

// // ==============

// const arr = Object.create(Array.prototype);
// arr.hello = () => "Hello";

// console.log(arr.hello());
