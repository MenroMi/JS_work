const newDiv = document.createElement('div'),
      newSpan = document.createElement('span');

newSpan.textContent = 'Give me more!!!';

newDiv.appendChild(newSpan);
document.body.append(newDiv);

const btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++) {
    if (i == 0) {
        btns[i].textContent = 'YES!';
    } else if (i == 1) {
        btns[i].textContent = "NO!";
    } else {
        btns[i].textContent = "WE CAN!";
    }
}

btns.forEach((btn, i) => {
    btnsAddNewText(btn, i);
});

function btnsAddNewText(btn, ind) {

    const newElem = document.createElement('span');

    btn.addEventListener('click', () => {
        newSpan.insertAdjacentText('beforeend', newElem.textContent = `${btns[ind].textContent}`);
    })

}
