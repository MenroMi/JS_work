const div = document.querySelector('div'),
      btns = div.querySelectorAll('button');


function changeColor(i = 0) {
    if (!btns[i].classList.contains('another-color')) {
        btns[i].classList.add('another-color');
    } else {
        btns[i].classList.remove('another-color');
    }
}

function fewBtn(event) {
    const target = event.target; // if event.target = button
    btns.forEach((btn, i) => {
        if (target == btn) {
            changeColor(i);
        }
    });

}

div.addEventListener('click', fewBtn);