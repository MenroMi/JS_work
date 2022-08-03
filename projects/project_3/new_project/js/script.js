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

    const deadline = "2022-07-31T23:58:59.000Z"; // data końcowa

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

    const modalsOpen = document.querySelectorAll("[data-modal]"),
        modalClose = document.querySelector("[data-close]"),
        modalWin = document.querySelector('.modal');

    
    function closeWindow() {

        modalWin.classList.remove('show');
        document.body.style.overflow = '';

    }

    function openWindow() {

        modalWin.classList.add('show');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);

    }

    // const modalTimerId = setTimeout(openWindow, 1000); // when we want open modal window
    //after some time, and clear interval later

    modalsOpen.forEach(modal => {

        modal.addEventListener('click', openWindow);

    });

    modalWin.addEventListener('click', (event) => {

        const target = event.target;
        if (target === modalWin) {closeWindow();}

    });

    modalClose.addEventListener('click', closeWindow);

    document.addEventListener('keydown', (event) => { // modal window to close when push 'ESC'

        if (event.keyCode === 27 && modalWin.classList.contains('show')) {closeWindow();} // unique code "esc" key 

    });

    function showModalByScroll() {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ) {
            // można dodać -1 px w przypadku gdy nie pojawia się modalne okno
            openWindow();
            window.removeEventListener('scroll',showModalByScroll);
        }

        
    }
        window.addEventListener('scroll',showModalByScroll);

    

    // if (document.documentElement.scrollHeight == document.documentElement.clientHeight) {openWindow();}
    // }, );

    // modalBcgColor.addEventListener('click', () => {
    //     modalWin.classList.remove('show');
    //     document.body.style.overflow = ''; 
    // });







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



// const time = "2022-07-05";

// const diffTime = Date.parse(time) - Date.now();
// console.log(Math.floor((diffTime / (1000 * 3600) % 24)));
// console.log(Math.floor(diffTime / (1000 * 3600 * 24)));

// ======================

//  CARDS

    const menu = document.querySelector('.menu'),
          field = menu.querySelector('.menu__field'),
          container = field.querySelector('.container');

    class Items {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;            
            this.title = title;
            this.descr = descr;
            this.price = price; // (1) (5)
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); // (2)
        }

        changeToUAH() { // podaną metodę możemy wywołać również w kosntruktorze (3)
            this.price = this.price * this.transfer; // konwerter walut (powiedzmy);    (4) 
        }


        render() {
            const element = document.createElement('div');
            

            if (this.classes.length !== 0) {
                this.classes.forEach(className => element.classList.add(className));
            } else {
                this.element = "menu__item";
                element.classList.add(this.element);

            }

            element.innerHTML = `<img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;

            this.parent.append(element);


        }

    }

    class Vege {
        constructor(subtitle, descr, total) {
            this.subtitle = subtitle;
            this.descr = descr;
            this.total = total;
        }

        addVegeItem() {

            const divMain = document.createElement('div'),
                  imgForVege = document.createElement('img'),
                  h3SubTitle = document.createElement('h3'),
                  divDescr = document.createElement('div'),
                  divDivider = document.createElement('div'),
                  divPrice = document.createElement('div'),
                  divCost = document.createElement('div'),
                  divTotal = document.createElement('div');
            
            divMain.classList.add('menu__item');

            imgForVege.src = 'img/tabs/vegy.jpg';
            
            h3SubTitle.classList.add('menu__item-subtitle');
            h3SubTitle.innerHTML = `${this.subtitle}`;

            divDescr.classList.add('menu__item-descr');
            divDescr.innerHTML = `${this.descr}`;

            divDivider.classList.add('menu__item-divider');

            divPrice.classList.add('menu__item-price');

            divCost.classList.add('menu__item-cost');
            divCost.textContent = 'Цена:';

            divTotal.classList.add('menu__item-total');
            divTotal.innerHTML = `<span>${this.total}</span> грн/день`;

            container.append(divMain);
            divMain.append(imgForVege);
            divMain.append(h3SubTitle);            
            divMain.append(divDescr); 
            divMain.append(divDivider);
            divMain.append(divPrice);
            divPrice.append(divCost);
            divPrice.append(divTotal);

        }


    }

    class Elite {
        constructor(image, alt, subtitle, descr, total) {
            this.image = image;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.total = total;
        }

        addCardElite() {

            const divMain = document.createElement('div');

            divMain.classList.add('menu__item');
            divMain.innerHTML = `<img src="${this.image}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.subtitle}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.total}</span> грн/день</div>
            </div>`;

            container.append(divMain);

        }

    }

    class Post {
        constructor(src, alt, title, descr, price) {
            this.src = src;
            this.alt = alt;            
            this.title = title;
            this.descr = descr;
            this.price = price;
        }

        // for fun

    }

    // const obj = new Items(...args);
    // obj.render();

        

    new Items(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        5,
        ".menu .container",
        "menu__item"
    ).render(); // jednorazowe wywołanie konstruktora

    new Items(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        9,
        ".menu .container",
        "menu__item"
    ).render(); // jednorazowe wywołanie konstruktora

    new Items(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container",
        "menu__item"
    ).render(); // jednorazowe wywołanie konstruktora

    // ============================
    // Forms

    const forms = document.querySelectorAll('form'); // 1

    const message = { // 18
        loading: 'Загрузка',
        success: "Спасибо! Скоро с вами свяжутся!",
        failure: 'Что-то пошло не так'
    }; // magazyn wiadomości, które chcemy pokazać klientowi

    
    forms.forEach(item => { // 16

        postData(item); // 17

    });

    function postData(form) { // 2
   
        form.addEventListener('submit', (e) => { // 3
            e.preventDefault(); // 5 dodajemy na samym początku, by usunąć za każdym razem
            // odświeżanie strony po wysłaniu formy

            const statusMessage = document.createElement('div'); // 15
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading; 
            form.append(statusMessage); 

            const request = new XMLHttpRequest(); // 6
            request.open('POST', 'server.php'); // 7

            request.setRequestHeader('Content-type', 'application/json'); // 8 
            
            const formData = new FormData(form); // 9

            // ==============
            // json-formats
            const obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });

            const json = JSON.stringify(obj);
            // ===============
            request.send(json); // 10

            request.addEventListener('load', () => { // 11

                if (request.status === 200){ // 12
                    console.log(request.response); // 13
                    statusMessage.textContent = message.success;
                    form.reset(); // resetowanie formy
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else { //14
                    statusMessage.textContent = message.failure;

                }
            });

        });
    }

});