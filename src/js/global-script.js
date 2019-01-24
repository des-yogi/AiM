// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });

(function(){
  var productSwiper = new Swiper('.product__col-slider', {
    speed: 400,
    spaceBetween: 20,
    // grabCursor: true,
    effect: 'fade',
    /*zoom: true,
    zoom: {
      maxRatio: 2,
    },*/
    /*autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },*/
    hashNavigation: {
      watchState: true,
      replaceState: true,
    },
    navigation: {
      nextEl: '.product__button-next',
      prevEl: '.product__button-prev',
    },
    pagination: {
      el: '.product__pagination',
      clickable: true,
      //dynamicBullets: true,
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
  });
}());
