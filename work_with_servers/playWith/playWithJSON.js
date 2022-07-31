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