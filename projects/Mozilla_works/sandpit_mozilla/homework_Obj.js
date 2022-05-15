const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            // js: '20%',
            // // php: '10%'
        },
        exp: '1 month'
    }
};

const {skills: {
    programmingLangs,
    }
} = personalPlanPeter;

console.log(programmingLangs == {});

// zadanie #1

// function showExperience(plan) {
    
//     const {
//         name,
//         age,
//         skills: {
//             languages,
//             programmingLangs,
//             exp
//         }
//     } = plan;

//     return exp;

// }

// console.log(showExperience(personalPlanPeter));  


// zadanie #2


function showProgrammingLangs(anotherPlan) {
    
    const {skills: {
        programmingLangs,
    }
    } = anotherPlan;
    
    
    if (!Object.keys(programmingLangs).length === 0) {
        for ( let key in programmingLangs ) {
            console.log(`Язык ${key} изучен на ${programmingLangs[key]}\n`);
        }
    } else {
        console.log('Не знаешь ещё языков, либо не вписал инфо');
    }
}

showProgrammingLangs(personalPlanPeter);
