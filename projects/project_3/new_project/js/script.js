window.addEventListener('DOMContentLoaded', () => {


    // TABS

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent() { // function, which hide all useless tabs

        tabsContent.forEach(tab => { // we iterate, cause we want work
        // with all element
            tab.classList.add('hide'); // later we hide useless tabs 
            tab.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => { // class-active will be turn off with all
            // off tabs

            tab.classList.remove("tabheader__item_active");
        });

    }

    function showTabContent(numb = 0) { // we show only active tab
        // function have default parametr - this is parametr when 
        // we don't announce function with argument before

        tabsContent[numb].classList.add('show', 'fade');
        tabsContent[numb].classList.remove('hide');
        tabs[numb].classList.add("tabheader__item_active"); // we add
        // our tab activity class

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        // console.log(target);
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (target == tab) {
                    // console.log(tab);
                    // console.log(target);
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // TIMER

    const deadline = "2022-07-20T23:58:59.000Z"; // data końcowa

    function getTimeRemainig(endtime) {
        // różnica między datą aktualną i datą końcową
        let t = Date.parse(endtime) - Date.now(),
              days, hours, minutes, seconds;
        
        if (t <= 0) {

            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;

        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            // w nawiasach sprawdzamy ile mamy millisekund w dobie
            // 1 000 ms = 1 s
            // 60 000 ms = 1 m
            // 3 600 000 ms = 1 h
            // 86 400 000 ms = 1 day
    
            // dzieląc wybraną datę końcową na dobę w millisekundach
            // dostajemy ilość dni do zakończenia akcji
            // Math.floor usuwa liczby po przecinku za pomocą zaokrąglenia
    
                  hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            // dzięki operacji matematycznej dostajemy ilość godzin do zakończenia
                  minutes = Math.floor((t / (1000 * 60) % 60)),
            // tutaj minuty
                  seconds = Math.floor((t / 1000) % 60);
            // tutaj sekundy
            // priorytet należy do dzielenia, później modulo

        }

        return {
            'total': t, // millisekundy ogółem
            // 
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    // console.log(getTimeRemainig(deadline));

    function getZero(numb) {
        if (numb >= 0 && numb < 10) {
            return `0${numb}`;
        } else {
            return numb;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000);
    
        updateClock(); 

        function updateClock() {

            const t = getTimeRemainig(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
        
    }

    setClock('.timer', deadline);


    // MODAL WINDOW

    let modalsOpen = document.querySelectorAll("[data-modal]"),
        modalClose = document.querySelector("[data-close]"),
        modalWin = document.querySelector('.modal'),
        modalBcgColor = document.querySelector('.modal__dialog');


    modalsOpen.forEach(modal=> {

        modal.addEventListener('click', () => {

            modalWin.classList.add('show');
            document.body.style.overflow = 'hidden';

        });

    });

    modalBcgColor.addEventListener('click', () => {
        modalWin.classList.remove('show');
        document.body.style.overflow = ''; 
    });

    modalClose.addEventListener('click', () => {
        modalWin.classList.remove('show');
        document.body.style.overflow = '';
    });





    /*
    modalWin.style.display = 'none';
    console.log(modalWin);
    console.log(modalClose);

    modalsOpen.forEach((modal) => {

        modal.addEventListener("click", () => {

            modalWin.style.display = "";
            
            if (!modalWin.style.display) {


            }
        });


    });
    */

});

// const time = "2022-07-05";

// const diffTime = Date.parse(time) - Date.now();
// console.log(Math.floor((diffTime / (1000 * 3600) % 24)));
// console.log(Math.floor(diffTime / (1000 * 3600 * 24)));