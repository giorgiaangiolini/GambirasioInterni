import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


  function init(){
// slideshow
const swiper = new Swiper('#swiperHp', {
  loop: true,
  slidesPerView: 1,
  draggable: true,
  grabCursor: true,
  spaceBetween: 0,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
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
       let captionTitle = activeSlide.getAttribute("data-title");
       let slideCaption = document.querySelector(".slide-captions");
       if(slideCaption != null){
         slideCaption.innerHTML = "<p class='slide-title'>" + captionTitle + "<p class='current-title'>" + caption + "</p>"
       }
   }
 }

});

  // slideshowGalleria
  const swiperGalleria = new Swiper('#swiperGalleria', {
    loop: true,
    slidesPerView: 1,
    draggable: true,
    grabCursor: true,
    spaceBetween: 0,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
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
         let captionTitle = activeSlide.getAttribute("data-title");
         let slideCaption = document.querySelector(".slide-captions");
         if(slideCaption != null){
           slideCaption.innerHTML = "<p class='slide-title'>" + captionTitle + "<p class='current-title'>" + caption + "</p>"
         }
     }
   }
  
  });

  }

  init()

  