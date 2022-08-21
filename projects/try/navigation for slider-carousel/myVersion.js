const slides = document.querySelectorAll('.offer__slide'),
slider = document.querySelector('.offer__slider'),
prev = document.querySelector('.offer__slider-prev'),
next = document.querySelector('.offer__slider-next'),
total = document.getElementById("total"),
current = document.getElementById('current'),
wrapper = document.querySelector(".offer__slider-wrapper"),
slidesField = document.querySelector(".offer__slider-inner"),
width = wrapper.getBoundingClientRect().width;
let slideIndex = 1; // określa obecny slajd
let offset = 0;

if ( slides.length < 10) {
total.textContent = `0${slides.length}`;
} else {
total.textContent = slides.length;
}

if ( slideIndex < 10) {
current.textContent = `0${slideIndex}`;
} else {
current.textContent = slideIndex;
}


slidesField.style.width = 100 * slides.length + "%";
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

wrapper.style.overflow = 'hidden';

slides.forEach(slide => {slide.style.width = `${width}px`;});

slider.style.position = 'relative';

const navi = document.createElement('ol'); //lista menu
navi.classList.add('carousel-indicators');
slider.append(navi);

for ( let i = 0; i < slides.length; i++) {
const dot = document.createElement('li');

dot.setAttribute('id', i);
dot.classList.add('dot');
navi.append(dot);
}

const dots = document.querySelectorAll('.dot'); // również można stworzyć array na początku
// i dodawać elementy iteracji za pomocą metody push

activeDot();

function deactivateDot() {
dots.forEach(dot => {
  dot.classList.add("dot");
  dot.classList.remove("withoutOp");
});
}

function activeDot(numb = 0) {
dots[numb].classList.remove("dot");
dots[numb].classList.add("withoutOp");
}    

dots.forEach((dot, i) => {

dot.addEventListener('click', () => {
  if (dot.id == i) {
      slideIndex = i+1;
      offset = width * i;
      deactivateDot();
      activeDot(i);
      if ( i+1 < 10) {
          current.textContent = `0${i+1}`;
      } else {
          current.textContent = i+1;
      }
  }
  slidesField.style.transform = `translateX(-${offset}px)`;
});

});


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

deactivateDot();
activeDot(slideIndex-1);

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

deactivateDot();
activeDot(slideIndex-1);

});