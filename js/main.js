$(function () {
   $('.portfolio__slider').slick({
      infinite: true,
      fade: true,
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>'
   });

   new WOW().init();

});