const slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      curr = document.getElementById("current"),
      total = document.getElementById("total");
let activeIndex = 1;

showSlide(activeIndex);

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = `${slides.length}`;
}

function showSlide(n) {
    
    if ( n > slides.length) {
        activeIndex = 1;
    }
    if ( n < 1) {
        activeIndex = slides.length;
    }

    slides.forEach(slide => {slide.style.display = 'none';});
    slides[activeIndex - 1].style.display = 'block';

    getZeroAndNumber(curr);

}

function getZeroAndNumber(curr) {
    if ( activeIndex < 10) {
        curr.textContent = `0${activeIndex}`;
    } else {
        curr.textContent = `${activeIndex}`;
    }
}

function plusMinusSlide(n) {
    showSlide(activeIndex += n); //  замыкание
}

prev.addEventListener('click', () => plusMinusSlide(-1));
next.addEventListener('click', () => plusMinusSlide(1));