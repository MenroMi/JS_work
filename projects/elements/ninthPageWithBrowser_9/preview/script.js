'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');
/*

właściwości są potrzebne po to, by manipulować szerokością i wysokością
wraz padding'ami, lecz bez border, scroll oraz margin;

// const width = box.clientWidth, 
//       height = box.clientHeight;
*/
/*

właściwości są potrzebne po to, by manipulować szerokością i wysokością
wraz ze scroll'em, border oraz margin ( padding również)

    const width = box.offsetWidth,
        height = box.offsetHeight;
*/

const width = box.scrollWidth,
      height = box.scrollHeight;

console.log(width, height);

btn.addEventListener("click", () => {
    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box );
console.log(style.display);