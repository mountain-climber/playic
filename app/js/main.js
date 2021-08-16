$(function () {

  $('.header__btn, .menu a').on('click', function () {
    $('.menu').toggleClass('menu--open');
  });

  $('.menu a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(window).on('scroll', function (){
    var height = $(window).scrollTop();
    if (height > 150){
      $('.menu').addClass('menu--scroll');
    }
    else{
      $('.menu').removeClass('menu--scroll');
    }
  });
  
});