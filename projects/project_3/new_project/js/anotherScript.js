window.addEventListener('DOMContentLoaded', () => {

    const tabParent =  document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent');


    function hideTabsContent() {
        
        tabsContent.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');  
        });
        tabs.forEach(tab => { // class-active will be turn off with all
            // off tabs

            tab.classList.remove("tabheader__item_active");
        });

    }

    function showTabsContent(numb = 0) {
        tabsContent[numb].classList.add('show', 'fade');
        tabsContent[numb].classList.remove('hide');
        tabs[numb].classList.add("tabheader__item_active");
    }

    hideTabsContent();
    showTabsContent();

    tabParent.addEventListener('click', (event) => {

        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (target == tab) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }

    });

});