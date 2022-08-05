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

// ===============

function breakCamelCase(str) {

    let res = ``;
    str.split('').map((l) => {l == l.toUpperCase() ? res += ` ${l}` : res += l;});

    console.log(res);

}

breakCamelCase("camelCase");

// =====================

function noReapetLetter(s) {
    let res = [];
    const l = s.toLowerCase();
    if (s.length == 0 || +s) {
        return "None";
    } else {
        for ( let i = 0; i < s.length; i++) {
            let count = 0;
            for ( let k = 0; k < s.length; k++) {
                if (l[i] == l[k]) {
                    count++;
                }
            }
    
            if ( count == 1) {
                res.push(s[i]);
            }
        }
    }
    
    return res.length > 0 ? res[0] : 'None';
}

console.log(noReapetLetter('sTreSS'));

function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
}

console.log(firstNonRepeatingLetter('stress'));

//==============================

function func(s) {
    for ( let i in s) {
        console.log(s[i]);
    }
}

func('smith');




// let res = [];
// if (word.length == 0 || +word) {
//     console.log('None');
// } else {
//     for ( let i = 0; i < word.length; i++) {
//         let count = 0;
//         for ( let k = 0; k < word.length; k++) {
//             if (word[i] == word[k]) {
//                 count++;
//             }
//         }

//         if ( count == 1) {
//             res.push(word[i]);
//         } else {
//             return "None";
//         }
//     }
// }
// console.log(res[0]);