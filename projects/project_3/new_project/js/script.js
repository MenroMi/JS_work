window.addEventListener('DOMContentLoaded', () => {


    // TABS

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent() { // function, which hide all useless tabs

        tabsContent.forEach(tab => { // we iterate, cause we want work
        // with all element
            tab.classList.add('hide'); // later we hide useless tabs 
            tab.classList.remove('show');
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
          modalWindow = document.querySelector('.modal');

    
    function closeWindow() {

        modalWindow.classList.remove('show');
        document.body.style.overflow = '';

    }

    function openWindow() {

        modalWindow.classList.add('show');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);

    }

    // const modalTimerId = setTimeout(openWindow, 1000); // when we want open modal window
    //after some time, and clear interval later

    modalsOpen.forEach(modal => {

        modal.addEventListener('click', openWindow);

    });

    modalWindow.addEventListener('click', (event) => {

        const target = event.target;
        if (target === modalWindow || target.getAttribute("data-close") == '') {closeWindow();}

    });

    document.addEventListener('keydown', (event) => { // modal window to close when push 'ESC'

        if (event.keyCode === 27 && modalWindow.classList.contains('show')) {closeWindow();} // unique code "esc" key 

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

    // class Vege {
    //     constructor(subtitle, descr, total) {
    //         this.subtitle = subtitle;
    //         this.descr = descr;
    //         this.total = total;
    //     }

    //     addVegeItem() {

    //         const divMain = document.createElement('div'),
    //               imgForVege = document.createElement('img'),
    //               h3SubTitle = document.createElement('h3'),
    //               divDescr = document.createElement('div'),
    //               divDivider = document.createElement('div'),
    //               divPrice = document.createElement('div'),
    //               divCost = document.createElement('div'),
    //               divTotal = document.createElement('div');
            
    //         divMain.classList.add('menu__item');

    //         imgForVege.src = 'img/tabs/vegy.jpg';
            
    //         h3SubTitle.classList.add('menu__item-subtitle');
    //         h3SubTitle.innerHTML = `${this.subtitle}`;

    //         divDescr.classList.add('menu__item-descr');
    //         divDescr.innerHTML = `${this.descr}`;

    //         divDivider.classList.add('menu__item-divider');

    //         divPrice.classList.add('menu__item-price');

    //         divCost.classList.add('menu__item-cost');
    //         divCost.textContent = 'Цена:';

    //         divTotal.classList.add('menu__item-total');
    //         divTotal.innerHTML = `<span>${this.total}</span> грн/день`;

    //         container.append(divMain);
    //         divMain.append(imgForVege);
    //         divMain.append(h3SubTitle);            
    //         divMain.append(divDescr); 
    //         divMain.append(divDivider);
    //         divMain.append(divPrice);
    //         divPrice.append(divCost);
    //         divPrice.append(divTotal);

    //     }


    // }

    // class Elite {
    //     constructor(image, alt, subtitle, descr, total) {
    //         this.image = image;
    //         this.alt = alt;
    //         this.subtitle = subtitle;
    //         this.descr = descr;
    //         this.total = total;
    //     }

    //     addCardElite() {

    //         const divMain = document.createElement('div');

    //         divMain.classList.add('menu__item');
    //         divMain.innerHTML = `<img src="${this.image}" alt="${this.alt}">
    //         <h3 class="menu__item-subtitle">${this.subtitle}</h3>
    //         <div class="menu__item-descr">${this.descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${this.total}</span> грн/день</div>
    //         </div>`;

    //         container.append(divMain);

    //     }

    // }

    // class Post {
    //     constructor(src, alt, title, descr, price) {
    //         this.src = src;
    //         this.alt = alt;            
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //     }

    //     // for fun

    // }

    // const obj = new Items(...args);
    // obj.render();

    const getData = async (url) => {
        const getReq = await fetch(url);

        if (!getReq.ok) {
            throw new Error(`Could not fetch ${url}, status: ${getReq.status}`);
        }

        return await getReq.json(); // skoro json format jest na backendzie strony
        // to przy odbieraniu danych w json-formacie  metoda json() parsuje w obiekt js
    };

    // getData('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new Items(img, altimg, title, descr, price, ".menu .container").render();
    //         });
    //     });

    // axios.get("http://localhost:3000/menu")
    // .then(response => console.log(response));

    axios.get("http://localhost:3000/menu")
    .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new Items(img, altimg, title, descr, price, ".menu .container").render();
        });
    });

    // new Items(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     5,
    //     ".menu .container",
    //     "menu__item"
    // ).render(); // jednorazowe wywołanie konstruktora

    // new Items(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     'Меню “Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     9,
    //     ".menu .container",
    //     "menu__item"
    // ).render(); // jednorazowe wywołanie konstruktora

    // new Items(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     14,
    //     ".menu .container",
    //     "menu__item"
    // ).render(); // jednorazowe wywołanie konstruktora

    // ============================
    // Forms

    const forms = document.querySelectorAll('form'); // 1

    const message = { // 18
        loading: 'img/form/spinner.svg', // żeby dodać zdjęcie
        success: "Спасибо! Скоро с вами свяжутся!",
        failure: 'Что-то пошло не так'
    }; // magazyn wiadomości, które chcemy pokazać klientowi

    
    forms.forEach(item => { // 16

        bindPostData(item); // 17

    });

    const postData = async (url, data) => { // dodajemy kolejkę async
        const res = await fetch(url, { // najpierw ten kod
            method: "POST", // how
            headers: {'Content-type': 'application/json'}, // how
            body: data   // what exactly? 
        });

        return await res.json(); // dopiero później ten jako drugi

    };



    function bindPostData(form) { // 2
   
        form.addEventListener('submit', (e) => { // 3
            e.preventDefault(); // 5 dodajemy na samym początku, by usunąć za każdym razem
            // odświeżanie strony po wysłaniu formy

            const statusMessage = document.createElement('img'); // 15
            statusMessage.setAttribute('src', "img/form/spinner.svg");
            // statusMessage.src = message.loading; // można wykonać w taki sposób
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            
            const formData = new FormData(form); // 9

            // // ==============
            // // json-formats
            // const obj = {};
            // formData.forEach(function(value, key) {
            //     obj[key] = value;
            // });
            const json = JSON.stringify(Object.fromEntries(formData.entries())); // make json format

            
            // // ===============

            postData('http://localhost:3000/requests', json)
            .then((data) => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
                statusMessage.textContent = message.failure;
            }).finally(() => {
                form.reset();
            });

        });
    }

    // THANKS MODAL

    function openModal() {
        modalWindow.classList.add('show');
        document.body.style.overflow = 'hidden';
    }


    function showThanksModal(message) { // chcemy pokazać nowe modalnie okno po wysłaniu form
        // nie usunąć, tylko ukryć poprzednie i uwidocznić nowo stworzone;
        const prevModalDialog = document.querySelector('.modal__dialog');
        // wyciąga się to okno, które ma być poźniej ukryte.
        // podczas usuwania, przy powtórnej próbie włączyć modalne okno, nie otworzy się

        prevModalDialog.classList.add('hide'); //ukrywamy modalne okno
        openModal(); // odpowiada za włączenie modalnych okien
        const thanksModal = document.createElement('div'); // tworzymy nowe okno modalne (dynamiczne tworzony element)
        thanksModal.classList.add('modal__dialog'); // dodaje się do nowego okna ten sam styl. Taka zamiana jednego modalnego okna na drugie
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `; // dodajemy elementy, które mają się wyświetlić po kliknięciu
        
        document.querySelector('.modal').append(thanksModal); // dodajemy do HTML-dokumentu
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            closeWindow();
        }, 4000);

    }

    // fetch("https://jsonplaceholder.typicode.com/users/", {
    //     method: "POST",
    //     headers: {"Content-type": "application/json"},
    //     body: JSON.stringify({
    //         name: 'Kiryl',
    //         age: '23',
    //         user: true
    //     })
    // })
    // .then(response => response.text()).then(json => console.log(json));

    // ==========================

    // fetch('http://localhost:3000/menu')
    // .then(data => data.json())
    // .then(res => console.log(res)); 


    // SECOND SLIDE IN OFFER
    // const slider = document.querySelector(".offer__slider"),
    //       counter = slider.querySelector(".offer__slider-counter"),
    //       wrapper = slider.querySelector(".offer__slider-wrapper"),
    //       imgs = counter.querySelectorAll('img'),
    //       slides = wrapper.querySelectorAll('.offer__slide'),
    //       current = document.getElementById("current"),
    //       total = document.getElementById("total");

    // hideImg();
    // showImg();
    // changeSlider();

    // function hideImg() {
    //     slides.forEach(slide => {
    //         slide.classList.add('hide');
    //         slide.classList.remove('show');
    //     });
    // }

    // function showImg(numb = 0) {
    //     slides[numb].classList.add('show');
    //     slides[numb].classList.remove('hide');

    //     if ( numb > 4) {
    //         numb = 0;
    //     }
    //     if ()
        
    //     if (numb <= 10) {
    //         current.innerHTML = `0${numb}`;
    //     } else {
    //         current.innerHTML = numb;
    //     }
    // }

    // function changeSlider() {

    //     imgs.forEach(img => {
    //         img.addEventListener('click', (e) => {
    //             const target = e.target;
    //             if (target && img.getAttribute('alt') == 'prev') {
    //                 slides.forEach((slide, i) => {
    //                     if(slide.classList.contains('offer__slide')) {
    //                         hideImg();
    //                         showImg(i);
    //                     }
    //                 });
    //             }
    //             if (target && img.getAttribute('alt') == 'next') {
    //                 hideImg();
    //                 showImg();
    //             }
    //         });
    //     });


    // }



    const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.getElementById("total"),
          current = document.getElementById('current');
    let slideIndex = 1; // określa obecny slajd

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }   

        
    function showSlides(n) {

        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
        } else {
            total.textContent = slides.length;
        }   

        if ( n > slides.length) {
            slideIndex = 1;
        }
        if ( n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => slide.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }   

    }

    function plusSlides(n) {
        showSlides(slideIndex += n); // w przypadku odejmowania będzie odejmować 1 od slideIndex 
    }

    prev.addEventListener('click', () => plusSlides(-1));
    next.addEventListener('click', () => plusSlides(1));

});