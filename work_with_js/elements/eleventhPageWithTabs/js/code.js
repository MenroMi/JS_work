const tabsContent = document.querySelectorAll('.tab__content'),
      tabParent = document.querySelector('.tab__items'),
      tabs = document.querySelectorAll('.tab__item'),
      tabContainer = document.querySelector('.tabcontainer');

function hideTabsContent() {
    tabsContent.forEach(content => {
        content.classList.add('hide');
    });

    tabs.forEach(tab => {
        tab.classList.remove('is-active', 'border-f-color', 'border-s-color', 'border-t-color');
    });
}

function showTabsContent(numb = 0) { // значение по умолчанию
    
    tabsContent[numb].classList.add('show');
    tabsContent[numb].classList.remove('hide');

    tabs[numb].classList.add('is-active');

    if (tabs[numb].dataset.tab == 'tab1') {
        tabs[numb].classList.add('border-f-color');
    } else if (tabs[numb].dataset.tab == 'tab2') {
        tabs[numb].classList.add('border-s-color');
    } else if (tabs[numb].dataset.tab == 'tab3') {
        tabs[numb].classList.add('border-t-color');
    } 
}

function changeColorContainer(numb = 0) {
    if (tabsContent[numb].dataset.content == 'item1') {
        tabContainer.classList.add('first-color');
        tabContainer.classList.remove('second-color', 'third-color');
    } else if (tabsContent[numb].dataset.content == 'item2') {
        tabContainer.classList.add('second-color');
        tabContainer.classList.remove('first-color', 'third-color');
    } else {
        tabContainer.classList.add('third-color');
        tabContainer.classList.remove('first-color', 'second-color');
    }
}

hideTabsContent();
showTabsContent();

tabParent.addEventListener('click', (event) => {

    const target = event.target;
    tabs.forEach((tab, i) => {
        if (target == tab) {
            hideTabsContent();
            showTabsContent(i);
            changeColorContainer(i); 
        }
    });

});