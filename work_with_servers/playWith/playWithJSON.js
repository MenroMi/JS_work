const worker = {
    name: 'John',
    age: 37,
    parents: {
        mom: 'Bella',
        dad: 'Edward'
    }
};

const anotherWorker = JSON.parse(JSON.stringify(worker));
anotherWorker.name = 'Brett';
anotherWorker.parents.dad = 'Justin';

console.log(worker);
console.log(anotherWorker);

// ========================

let room = {
    number: 23
  };
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

// console.log(meetup === meetup.self);
// console.log(meetup.self);

for ( let value in meetup) {
    console.log(meetup[value]);
}