const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
sidebar.style.top = `-${(slidesCount -1) *100}vh`;

let actievSlideIndex = 0;

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if(direction === 'up') {
    actievSlideIndex++
    if(actievSlideIndex === slidesCount) {
      actievSlideIndex = 0
    }
  } else if (direction === 'down') {
    actievSlideIndex--
    if(actievSlideIndex < 0) {
      actievSlideIndex = slidesCount - 1
    }
  }
  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${actievSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${actievSlideIndex * height}px)`;
}