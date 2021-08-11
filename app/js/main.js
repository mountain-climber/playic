$(function () {

  $('.header__btn').on('click', function () {
    $('.menu').toggleClass('menu--open');
  });

  if ($(window).width() < 993) {
    // $('.users__content-title').appendTo($('.container'));
  }
  
});