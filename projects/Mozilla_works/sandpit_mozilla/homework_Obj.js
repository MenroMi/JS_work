const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '50%',
        },
        exp: '1 month'
    },
    // zadanie #3
    // showAgeAndLangs: function(plan) {
    //     const { skills: {languages: [item1, item2]}}= plan;
    //     let str = `Мне ${plan.age} и я владею языками: ${item1.toUpperCase()} ${item2.toUpperCase()}`;
    //     str += ' ';
    //     return str;
    // }
};

// personalPlanPeter.age = '25';
// personalPlanPeter.skills.languages = ['ru', 'eng'];

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// const {skills: {
//     programmingLangs,
//     }
// } = personalPlanPeter;

// programmingLangs.python = '30%';

// console.log(personalPlanPeter.skills.programmingLangs);

// zadanie #1

// function showExperience(plan) {
    
    // const {
    //     name,
    //     age,
    //     skills: {
    //         languages,
    //         programmingLangs,
    //         exp
    //     }
    // } = plan;

    // return exp;

// }

// console.log(showExperience(personalPlanPeter));  


// zadanie #2


function showProgrammingLangs(anotherPlan) {
    
    const {skills: {
        programmingLangs,
    }
    } = anotherPlan;
    
    let newString = '';

    if (Object.keys(programmingLangs).length === 0) {
        console.log('Не знаешь ещё языков, либо не вписал инфо');
    } else {
        for ( let key in programmingLangs ) {
            newString += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        }
    }
    return newString;
}

console.log(showProgrammingLangs(personalPlanPeter));

// ================================
// zadanie #3

let schedule = {
    name: 'John'
};

const isEmpty = obj => {
    if ( Object.keys(obj).length === 0) { // zmieniamy na array i sprawdzamy długość
    
        // można również sprawdzić bezpośrednio obiekt za pomocą loopa:
        // for ( let key in obj) {
        //    return false;
        // }

        return true;
    } else {
        return false;
    }
};

console.log(isEmpty(schedule));

// =====================
// zadanie #4

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for ( let key in obj ) {
        if ( typeof(obj[key]) === 'number' ) {
            obj[key] = obj[key] * 2;
        } else {
            continue;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);

// ==================
// zadanie #5

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily (arr) {
    
    let str = '';

    if ( arr.length === 0 ) {
        str += 'Семья пуста';
    } else {
        str += 'Семья состоит из: ';
        for ( let key of arr) {
            str += `${key} `;
        }
    }
 
    return str;

}

console.log(showFamily(family));

// ================
// zadanie #6

const arrayOfCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function favoriteCities(item) {
    let str = '';
    for ( let key of item) {

    }

//     let str = '';
//     item.forEach(function(arr) {
//         str += `${arr.toLowerCase()}\n`;
//     });

//     console.log(str);
}

favoriteCities(arrayOfCities);



const i = false;

let str = '';

i === true ? str = 'Ok' : str = 'Nie ok';

console.log(str);

