// Slider using swipper.js library 
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
  },
});

// Hamburger 
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click',()=>{
  hamburger.style.display = "none"
  menu.style.display = 'block';
})

close.addEventListener('click',()=>{
  hamburger.style.display = "block"
  menu.style.display = 'none';
})