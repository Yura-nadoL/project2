// scroll header ====================================================================================================================================================
let lastScroll = 0;
const defaultOffset = 10;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
   if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      //scroll down
      header.classList.add('hide');
   }
   else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.classList.remove('hide');
   }

   lastScroll = scrollPosition();
})

// burger ====================================================================================================================================================
const burgerBtn = document.querySelector('.header__burger');
const body = document.body;

if (burgerBtn && body) {
   burgerBtn.addEventListener('click', e => {
      burgerBtn.classList.toggle('active')
      body.classList.toggle('lock')
   })
}

// slider can ====================================================================================================================================================
const swiperCan = new Swiper('.sliders-can__slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 3,
   centerInsufficientSlides: true,
   spaceBetween: 75,
   freeMode: true,
   centeredSlides: true,
   effect: 'coverflow',
   coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      stretch: -50,
      scale: 1,
   },
   breakpoints: {
      // when window width is >= 320px
      300: {
         slidesPerView: 1,
         effect: 'slide',
      },
      680: {
         slidesPerView: 1,
         effect: 'slide',
      },
      767: {
         slidesPerView: 1,
         effect: 'slide',
      },
      1000: {
         slidesPerView: 2,
         centeredSlides: true,
      },
      1100: {
         slidesPerView: 3,
         centeredSlides: true,
      },
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});









