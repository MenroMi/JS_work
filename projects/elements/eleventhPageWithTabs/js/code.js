const tabsContent = document.querySelectorAll('.tab__content'),
      tabParent = document.querySelector('.tab__items'),
      tabs = document.querySelectorAll('.tab__item');

function hideTabsContent() {
    tabsContent.forEach(content => {
        content.classList.add('hide');
    });

    tabs.forEach(tab => {
        tab.classList.remove('is-active');
    });
}

function showTabsContent(numb = 0) { // значение по умолчанию
    
    tabsContent[numb].classList.add('show');
    tabsContent[numb].classList.remove('hide');

    tabs[numb].classList.add('is-active');

}

function changeColorContainer() {
    
}

hideTabsContent();
showTabsContent();

tabParent.addEventListener('click', (event) => {

    const target = event.target;
    tabs.forEach((tab, i) => {
        if (target == tab) {
            hideTabsContent();
            showTabsContent(i); 
        }
    });



});