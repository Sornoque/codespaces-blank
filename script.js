
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

const carousel = document.querySelector('.carousel');
const dots = document.querySelector('.dot');

let index = 0;

function updateCarousel(){
  carousel.scrollLeft = index * 320;
  dots.forEach(dot => { dot.classList.remove('active'));
    dots[index].classList.add('active');
}

document.querySelector('right').onclick = () => {
  if (index < 2) {
    index++;
    updateCarousel();
  }
}

document.querySelector('left').onclick = () => {
  if (index < 0) {
    index--;
    updateCarousel();
  }
}
