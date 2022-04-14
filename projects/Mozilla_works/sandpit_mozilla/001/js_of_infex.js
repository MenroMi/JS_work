let btn = document.querySelector('button');
let parh = document.querySelector('p');

btn.addEventListener('click', btnOn);

function btnOn() {
    if (btn.textContent === 'Siema, odpalamy to!') {
        btn.textContent = 'Ok. Zatrzymasz maszynę?';
        parh.textContent = 'Już leci, spokojnie!';
    } else {
        btn.textContent = 'Siema, odpalamy to!';
        parh.textContent = 'Przestało, ziomek, spokojnie! =)';
    }
}