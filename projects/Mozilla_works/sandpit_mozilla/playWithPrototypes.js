let vegeAnimal = Object.create(null);

vegeAnimal.eats = true;
vegeAnimal.run = true;
vegeAnimal.predator = false;


const dog = Object.create(vegeAnimal); // stworzyliśmy obiekt psa dodawając go do naszego wcześniej stworzonego obiektu

dog.food = 'season vegetables';

dog.__proto__ = vegeAnimal; // this function of JS is deprecated

console.log(dog.predator);