const gender = document.querySelector('#gender'),
      divs = document.querySelectorAll(".calculating__choose-item"),
      constitution = document.querySelector(".calculating__choose_medium"),
      calcInputs = constitution.querySelectorAll('input'),
      total = document.querySelector(".calculating__result");

let sex, activity, height, weight, age;

defineGender(gender);
hideClass();
inputs();
takeActivity();
result();

function result() {

    if (Boolean(sex && activity && height && weight && age) == false) {
        return total.innerHTML = `<span>0</span> ккал
        </div>`;
    }

    if (sex === 'Мужчина') {
        const res = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
        total.innerHTML = `
    <div class="calculating__result">
        <span>${Math.trunc((res * activity))}</span> ккал
    </div>`;
    } else {
        const res = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
        total.innerHTML = `
    <div class="calculating__result">
        <span>${Math.trunc((res * activity))}</span> ккал
    </div>`;
    }


}


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

function defineGender(g) {
    const collOfG = g.children;
    collOfG[0].setAttribute('id', 'man');
    collOfG[1].setAttribute('id', 'man');

    const people = document.querySelectorAll('#man');

    gender.addEventListener('click', (e) => {
        const target = e.target;
        
        people.forEach((p, i) => {
            if (target == p) {
                hideClass(people);
                addClass(people, i);
                sex = p.textContent;
                result();
            }
        });
    });
}

const checkActive = async (url, i) => {
    await fetch(url)
    .then(data => data.json())
    .then(data => activity = data[i]);

    return await result();
};

function takeActivity() {

    const psychicalActivity = document.querySelector(".calculating__choose_big"),
    levelOfActivity = psychicalActivity.querySelectorAll(".calculating__choose-item");

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
}

function inputs() {

    calcInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const target = e.target;
            if ( target.id === 'height') {
                height = +target.value;
            }
            if ( target.id === 'weight') {
                weight = +target.value;
            }
            if ( target.id === 'age') {
                age = +target.value;
            }
            result();
        });
    });

}
