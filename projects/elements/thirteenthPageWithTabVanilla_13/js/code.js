"use strict";

const btnsParent = document.querySelector('.tabsheader'),
      btns = document.querySelectorAll('.tab_item'),
      tabsContent = document.querySelectorAll('.content_item');


function hideTabsAndActiveClass() {

    btns.forEach(btn => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        }
    });

    tabsContent.forEach(content => {
        content.classList.add('hide_tabs');
    });

}

function showTabsAndActiveClass(num = 0) {

    btns[num].classList.add('active');

    tabsContent[num].classList.add('show_tabs');
    tabsContent[num].classList.remove('hide_tabs');

}

hideTabsAndActiveClass();
showTabsAndActiveClass();

btnsParent.addEventListener('click', (event) => {

    const target = event.target;

    btns.forEach((btn, i) => {
        if ( target == btn) {
            hideTabsAndActiveClass();
            showTabsAndActiveClass(i);
        }
    });

});
