const gender = document.querySelector('#gender'),
      divs = document.querySelectorAll(".calculating__choose-item"),
      psychicalActivity = document.querySelector(".calculating__choose_big"),
      levelOfActivity = psychicalActivity.querySelectorAll(".calculating__choose-item"),
      constitution = document.querySelector(".calculating__choose_medium"),
      calcInputs = constitution.querySelectorAll('input'),
      total = document.querySelector(".calculating__total");



defineGender(gender);
hideClass();
chooseGenderAndPhysicalActivity();


function defineGender(g) {
    const collOfG = g.children;
    collOfG[0].setAttribute('id', 'man');
    collOfG[1].setAttribute('id', 'man');
}

const people = document.querySelectorAll('#man');
    //   woman = document.querySelector('#woman');

function hideClass(item = divs) {
    item.forEach(man => {
        if ( man.classList.contains("calculating__choose-item_active")) {
            man.classList.remove("calculating__choose-item_active");
        }
    });
    
}

function addClass(item, i) {
    item[i].classList.add("calculating__choose-item_active");

}

const checkActive = async (url, i) => {
    return await fetch(url)
    .then(data => data.json())
    .then(data => personData(data[i]));
};

const person = {};

function personData(item) {

    if (item === 'Женщина' || item === 'Мужчина') {
        person.gender = item;
    }
    if (typeof item == "number") {
        person.activity = item;
    }
    if ( item.id === "height") {
        person.height = +item.value;    
    } else if (item.id === "weight") {
        person.weight = +item.value;
    } else if (item.id === "age") {
        person.age = +item.value;
    }
}

calcCcal(person);

function calcCcal(obj) {
    if (obj.gender === 'Мужчина') {
        const res = 88.36 + (13.4 * obj.weight) + (4.8 * obj.height) - (5.7 * obj.age);
        total.innerHTML = `<div class="calculating__subtitle">Ваша суточная норма калорий:</div>
    <div class="calculating__result">
        <span>${(res * obj.activity)}</span> ккал
    </div>`;
    } else {
        const res = 447.6 + (9.2 * obj.weight) + (3.1 * obj.height) - (4.3 * obj.age);
        total.innerHTML = `<div class="calculating__subtitle">Ваша суточная норма калорий:</div>
    <div class="calculating__result">
        <span>${(res * obj.activity)}</span> ккал
    </div>`;
    }
}


function chooseGenderAndPhysicalActivity() {

    gender.addEventListener('click', (e) => {
        const target = e.target;
        
        people.forEach((p, i) => {
            if (target == p) {
                hideClass(people);
                addClass(people, i);
                personData(p.textContent);
            }
        });
    });

    psychicalActivity.addEventListener('click', (e) => {
        const target = e.target;
        levelOfActivity.forEach((act, i) => {
            if (target == act) {
                hideClass(levelOfActivity);
                addClass(levelOfActivity, i);
                checkActive("http://localhost:3000/activity", target.getAttribute("id"));
            }
        });
    });

    calcInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const target = e.target;
            personData(target);
        });
    });

}


// class Person {
//     constructor(gender, activity, height, weight, age) {
//         this.gender = gender;
//         this.activity = activity;
//         this.height = height;
//         this.weight = weight;
//         this.age = age;
//     }

//     // checkBMR() {
//     //     fetch("http://localhost:3000/personData", {
//     //         method: "POST",
//     //         headers: {"Content-type": "application/json"},
//     //         body: 
//     //     });
//     // }

// }

