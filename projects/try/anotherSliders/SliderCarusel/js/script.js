const prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector("#current"),
      sliderWrapper = document.querySelector('.offer__slider-wrapper'),
      sliderInner = sliderWrapper.querySelector(".offer__slider-inner"),
      slides = sliderWrapper.querySelectorAll('.offer__slide'),
      width = sliderWrapper.getBoundingClientRect().width;

let slideIndex = 1,
    windowOffset = 0;

addNewProps();
checkAllNumbersSlides();
checkCurrentNumberOfSlide(slideIndex);
addListener();

function checkAllNumbersSlides() {
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }
}

function checkCurrentNumberOfSlide(n) {
    if (n < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}


function addNewProps() {

    sliderInner.style.width = 100 * slides.length + "%"; 
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s all';

    slides.forEach(slide => {
        slide.style.width = width;
    });  // w przypadku zróżnicowanej szerokości trzeba ujednolicić wartości

    sliderWrapper.style.overflow = 'hidden';

}

function addListener() {
    next.addEventListener('click', () => {

        if (windowOffset == width * (slides.length - 1)) {
            windowOffset = 0;
        } else {
            windowOffset += width;
        }

        sliderInner.style.transform = `translateX(-${windowOffset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        
        checkCurrentNumberOfSlide(slideIndex);
        

    });

    prev.addEventListener('click', () => {

        if (windowOffset == 0) {
            windowOffset = width * (slides.length - 1);
        } else {
            windowOffset -= width;
        }

        sliderInner.style.transform = `translateX(-${windowOffset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        checkCurrentNumberOfSlide(slideIndex);

    });
}