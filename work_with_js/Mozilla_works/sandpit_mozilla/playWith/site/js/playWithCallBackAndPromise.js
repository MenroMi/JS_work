// function getUsers(names) {

//     names.forEach(name => {

//         fetch(`https://api.github.com/users/${name}`)
//         .then(response => response.json())
//         .then(data => console.log(data));
        
//     }); 

// }


// getUsers(['MenroMi', "dnksebastian", "KarolinaBrzezinska"]);


// const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay));

// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);

// async function one() {

//     const promises = [a(), b(), c()];
//     const [outpu1, outpu2, outpu3] = await Promise.all(promises);

//     return `one is done: ${outpu1} ${outpu2} ${outpu3}`;

// }

// one().then(console.log);

// ========================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumb(numb) {
    // return numb.map(el => el % 2 == 0 ? Math.round(Math.sqrt(el)) : 0); 
    return numb.reduce((prev, curr) => curr % 2 == 0 ? Math.sqrt(curr) + prev ? prev == 1 : prev.remove() : prev, 1);
}

console.log(evenNumb(arr));