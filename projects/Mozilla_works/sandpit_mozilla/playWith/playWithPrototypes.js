let vegeAnimal = Object.create(null);

vegeAnimal.eats = true;
vegeAnimal.run = true;
vegeAnimal.predator = false;
vegeAnimal.sleep = function() {
    return 'Sleep a few hours';
};


const dog = Object.create(vegeAnimal); // stworzyliśmy obiekt psa dodawając go do naszego wcześniej stworzonego obiektu

dog.food = 'season vegetables';

dog.__proto__ = vegeAnimal; // this function of JS is deprecated

console.log(dog.sleep());

// =====================

let user = {
    name: 'John',
    age: 30
};

user.sayHi = function() {
    return 'Hello!';
};

console.log(user.sayHi());

// =====================

let userName = {
    name: "Джон",
    hi() { console.log(this.name); }
  };
  
  // разделим получение метода объекта и его вызов в разных строках
  let hi = userName.hi;
  hi(); 

  // =================

let genericAnimal  = Object.create(null);

genericAnimal.item = 'Zwierzę';
genericAnimal.name = 'Nazwa zwierzęta';
genericAnimal.gender = 'Kobiece';
genericAnimal.descr = function () {
    return `Прототип: ${genericAnimal.item}, у которого название - ${this.name}. У него пол: ${this.gender}`;
};

let wolf = Object.create(genericAnimal);
wolf.name = 'Wolf';
wolf.gender = 'Męski';
wolf.eats = 'rabbit';


let andeanWolf = Object.create(wolf);
andeanWolf.country = 'Andes';
andeanWolf.name = 'Andean Wolf';


let canisFerox = Object.create(wolf);
canisFerox.country = 'North America';

console.log(andeanWolf.descr());

// =====================

let animal = {
    whereLived: 'North America',
    eats: true,
    predator: "хищник",
    isPredator() {
        return `Это животное ${this.predator}.`;
    }

};

let rabbit = {
    jumps: true,
    food: 'carrot',
    predator: "не хищник"

};

rabbit.__proto__ = animal;

let eagle = {
    canFly: true,
    food: 'mouse',
    __proto__: animal,
    arrayPropertyEagle() {
        for ( let key in this) {console.log(key);}
    },

};

eagle.isPredator = function() {
    return "Орёл любит есть мышей, поэтому он хищник!";
};

eagle.arrayPropertyEagle();


// =====================

let str = 'some'; // примитив
let strObj = new Object(str); // объект

// =====================

const soldier = {
    health: 400,
    armor: 100,
    sayHi() {
        console.log('hi!');
    }    
};

const john = Object.create(soldier);

john.sayHi();

// ===============


let ladder = {

    step: 0,

    up() {
      this.step++;
    },

    down() {
      this.step--;
    },

    showStep() { // показывает текущую ступеньку
      console.log( this.step );
    }
    
  };


ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); 

ladder.up().up().down().showStep(); 