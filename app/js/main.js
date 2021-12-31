document.addEventListener("DOMContentLoaded", function () {

  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();

  function hrefs(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  }

  var menuLink = document.querySelectorAll('.menu__list-link[href*="#"]');

  menuLink.forEach(menuLink => { menuLink.addEventListener('click', hrefs) });

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () { fixedHeader() };

  // Get the header
  var header = document.querySelector('.menu');
  var headerScroll = 'menu--scroll';

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  var headerBtn = document.querySelector('.header__btn');
  var headerBtnScroll = 'header__btn--scroll';
  function fixedHeader(menuTop) {
    if (window.pageYOffset >= sticky) {
      header.classList.add(headerScroll);
      headerBtn.classList.add(headerBtnScroll);

      menuTop.style.top = '50px';
    } else {
      header.classList.remove(headerScroll);
      headerBtn.classList.remove(headerBtnScroll);

      menuTop.style.top = '25px';
    }
  }

  if (window.innerWidth < 1221) {
    document.querySelector('.footer__list-item:nth-child(2)').classList.remove('animate__fadeInLeft');
    document.querySelector('.footer__list-item:nth-child(2)').classList.add('animate__fadeInRight');
    document.querySelector('.footer__list-item:nth-child(3)').classList.remove('animate__fadeInRight');
    document.querySelector('.footer__list-item:nth-child(3)').classList.add('animate__fadeInLeft');

    document.querySelector('.footer__list-item:nth-child(3)').setAttribute('data-wow-delay', '.8s');
    document.querySelector('.footer__list-item:nth-child(4)').setAttribute('data-wow-delay', '.8s');
  }

  if (window.innerWidth < 993) {
    document.querySelector('.header__subtitle').classList.remove('animate__fadeInLeft');
    document.querySelector('.header__subtitle').classList.add('animate__fadeInRight');
    document.querySelector('.header__link').classList.remove('animate__fadeInLeft');
    document.querySelector('.header__link').classList.add('animate__zoomInUp');
  }

  if (window.innerWidth < 911) {
    var header = document.querySelector('.header__btn-wrap');
    var headerScroll = 'header__btn-wrap--scroll';
    window.onscroll = function () { fixedHeader(document.querySelector('.menu')) };


    var menu = document.querySelectorAll('.header__btn, .menu__list-link');
    
    var menuItem = document.querySelectorAll('.menu__list-item');


    function menuFunc() {
      document.querySelector('.menu').classList.toggle('menu--open');
      document.querySelector('.header__btn').classList.toggle('header__btn--active');
      menuItem.forEach(menuItem => { menuItem.setAttribute('class', 'menu__list-item') });
    };

    menuItem.forEach(menuItem => { menuItem.removeAttribute('class') });
    menu.forEach(menu => { menu.addEventListener('click', menuFunc) });
  }

});