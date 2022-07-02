const divInBody = document.querySelector('div'),
      div = document.createElement('div');
div.classList.add("black");
div.innerHTML = "<h4>Hello World!</h4>";
document.body.appendChild(div);

// ==========================

const btn = document.querySelector('button');

const addColor = () => {
    if (!btn.classList.contains('master')) {
        setTimeout(() => {btn.classList.add('master');console.log('Работает?');}, 500);

    } else {
        setTimeout(() => {btn.classList.remove('master');         console.log('Хммм');}, 500);

    }
};

btn.addEventListener('click', addColor);

// ===========================

const secondDiv = document.querySelector('.anotherDiv'),
      btns = secondDiv.querySelectorAll('button');

function changeColorBtn(i = 0) {
    if (!btns[i].classList.contains('master')) {
        btns[i].classList.add('master');
    } else {
        btns[i].classList.remove('master');
    }
}

function eventBtns(event) {
    const target = event.target;
    btns.forEach((btn, i) => {
        if (target == btn) {
            changeColorBtn(i);
        }
    });
}

secondDiv.addEventListener('click', eventBtns);