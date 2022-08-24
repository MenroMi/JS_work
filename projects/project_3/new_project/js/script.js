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

    // SECOND SLIDER IN OFFER WITH NAVI

    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.getElementById("total"),
          current = document.getElementById('current'),
          wrapper = document.querySelector(".offer__slider-wrapper"),
          slidesField = document.querySelector(".offer__slider-inner"),
          width = wrapper.getBoundingClientRect().width,
          navi = document.createElement('ol'),
          dots = []; //lista menu
    let slideIndex = 1; // określa obecny slajd
    let offset = 0;

    checkAllNumbersSlides();
    checkCurrentNumberOfSlide(slideIndex);
    addNewProps();
    navigationForSlider();

    next.addEventListener('click', () => {
        if (offset == width * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if ( slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        addOpacity();


    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = width * (slides.length - 1);
        } else {
            offset -= width;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if ( slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        addOpacity();

    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            checkCurrentNumberOfSlide(slideIndex);
            offset = width * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;
            
            addOpacity();
        
        });
    });

    function checkAllNumbersSlides() {
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
        } else {
            total.textContent = slides.length;
        }
    }

    function checkCurrentNumberOfSlide(n = 1) {
        if (n < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function addNewProps() {

        slidesField.style.width = 100 * slides.length + "%";
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
    
        wrapper.style.overflow = 'hidden';
    
        slides.forEach(slide => {slide.style.width = `${width}px`;});
    
        slider.style.position = 'relative';
    
    }

    function navigationForSlider() {
        navi.classList.add('carousel-indicators');
        slider.append(navi);

        for ( let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');

            dot.setAttribute('data-slide-to', i+1);
            dot.classList.add('dot');

            if (i == 0) {
                dot.style.opacity = '1';
            }

            navi.append(dot);
            dots.push(dot);

        }
    }

    function addOpacity() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    // ============ CALCULATOR

    const result = document.querySelector(".calculating__result span");
    let sex, height, weight, age, ratio;


    if ( localStorage.getItem('sex')) {
        sex = localStorage.getItem("sex");
    } else {
        sex = 'female';
        localStorage.setItem('sex', "female");
    }

    if ( localStorage.getItem('ratio')) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass) {

        const actives = document.querySelectorAll(selector);

        actives.forEach(active => {
            active.classList.remove(activeClass);
            if (active.getAttribute('id') === localStorage.getItem('sex')) {
                active.classList.add(activeClass);
            } 

            if (active.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                active.classList.add(activeClass);
            }

        });
    }
            
    initLocalSettings("#gender div", "calculating__choose-item_active");
    initLocalSettings(".calculating__choose_big div", "calculating__choose-item_active");

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        }

        if ( sex === "female") {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(parentSelector, activeClass) {

        const elements = document.querySelectorAll(parentSelector);
      

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute("data-ratio")) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem("ratio", +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem("sex", e.target.getAttribute('id'));
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
        
                e.target.classList.add(activeClass);
    
                calcTotal();
    
            });

        });

    }

    getStaticInformation("#gender div", "calculating__choose-item_active");
    getStaticInformation(".calculating__choose_big div", "calculating__choose-item_active");
    
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
                
            if(input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;    
            }

            calcTotal();

        });

    }
    getDynamicInformation("#height");
    getDynamicInformation("#weight");
    getDynamicInformation("#age");

});