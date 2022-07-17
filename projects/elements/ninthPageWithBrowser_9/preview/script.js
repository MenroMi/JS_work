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

const width = box.clientWidth,
      height = box.scrollHeight,
      style = window.getComputedStyle(box);


console.log(width, height);

// console.log(style.width);


console.log(box.getBoundingClientRect()); // show all coordinates of element

btn.addEventListener("click", () => {
    /*
    console.log(box.scrollHeight - box.scrollTop - box.clientHeight); // find "scrollBottom"
    */

    console.log(box.offsetWidth - box.clientWidth); // return your width of scrollbar


    // if (box.scrollTop > 100) {
    //     console.log(box.scrollTop);
    //     box.scrollTop = 0;
    // } else {
    //     box.scrollTop = 950;
    // }
});


/*

// expansion and curl scroll height

function addRemoveHeight() {
    if (height !== box.offsetHeight) {
        box.style.height = height + 'px';
        console.log(height,box.clientHeight);
    } else {
        box.style.height = 400 + 'px';
        console.log(height,box.offsetHeight);
    }
}

btn.addEventListener("click", addRemoveHeight);

*/

