const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    
    const {
        name,
        age,
        skills: {
            languages,
            programmingLangs,
            exp
        }
    } = plan;


    return exp;

}


console.log(showExperience(personalPlanPeter));  