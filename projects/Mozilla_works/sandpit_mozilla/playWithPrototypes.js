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