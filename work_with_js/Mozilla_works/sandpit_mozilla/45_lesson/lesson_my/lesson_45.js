const lay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('dblclick', (e) => {
        alert(e);
    });
});