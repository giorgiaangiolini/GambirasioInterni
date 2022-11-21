import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';


  // slideshow
  const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  draggable: true,
  grabCursor: true,
  spaceBetween: 0,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  on: {
   slideChangeTransitionStart: function () {
       let activeSlide = this.el.querySelector('div.swiper-slide-active');
       let caption = activeSlide.getAttribute("data-caption");
       console.log(caption)
       let slideCaption = document.querySelector(".slide-captions");
       if(slideCaption != null){
         slideCaption.innerHTML = "<p class='current-title'>" + caption + "</p>"
       }
   }
 }

});