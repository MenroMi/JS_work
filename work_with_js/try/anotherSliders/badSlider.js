const slider = document.querySelector(".offer__slider"),
wrapper = slider.querySelector(".offer__slider-wrapper"),
slides = wrapper.querySelectorAll('.offer__slide'),
current = document.getElementById("current");

hideImg();
showImg();
changeSlider(slider, current);

function hideImg() {
slides.forEach(slide => {
  slide.classList.add('hide');
  slide.classList.remove('show');
});
}

function showImg(numb = 0) {
slides[numb].classList.add('show');
slides[numb].classList.remove('hide');
}

function count(arrow, total) {

if(arrow.classList.contains("offer__slider-prev")) {
  if(total > 1) {
      total--;
      return total;
  } else {
      total = 4;
      return total;
  }
}

if (arrow.classList.contains("offer__slider-next")) {
  if(total < 4) {
      total++;
      return total;
  } else {
      total = 1;
      return total;
  }
}
}

function changeSlider(slider, curr) {

slider.addEventListener('click', (e) => {

  const target = e.target;
  let numb = curr.textContent;

  if (target && target.classList.contains('offer__slider-prev')) {
      console.log(target);
      const res = count(target, numb);
      curr.innerHTML = `<span id="current">0${res}</span>`;
      curr.replaceWith(curr);
      hideImg(); 
      showImg(res-1);
      
  }

  if (target && target.classList.contains('offer__slider-next')) {
      const res = count(target, numb);
      curr.innerHTML = `<span id="current">0${res}</span>`;
      curr.replaceWith(curr);
      hideImg(); 
      showImg(res-1);
      
  }
});
}