"use strict";

const animal = {
    tail: true,
    color: "white",
    isHerbivorous: true,
    place() {
        return "He lives on forest and home";
    },
    
    get animalProp() {
        console.log(this.tail);
        new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('He have tail?');
                setTimeout(() => {
                    console.log("We check!");
                    
                    if (this.tail === true) {
                        resolve();
                    }
                }, 2000);
            }, 2000);

        })
        .then(() => setTimeout(() => {
            console.log(`Yeah, he have tail in ${this.color}`);
        }, 2000));
    },

    set animalProp(tail) {
        return `${this.tail = tail}`;
    }

};

function Rabbit(name) {
    this.name = name;
}

const rabbit = new Rabbit("Common Rabbit");

Object.setPrototypeOf(rabbit, animal);

rabbit.place = () => {return "he lives in my room";};

rabbit.tail = true;

rabbit.animalProp;

// for ( let key in rabbit) {
//     let protoProp = rabbit.hasOwnProperty(key);

//     if (protoProp) {
//         console.log(`Our: ${key}`); // Our: jumps
//     } else {
//       console.log(`Inherited: ${key}`); // Inherited: eats
//     }
// }

