document.addEventListener('DOMContentLoaded', function () {

  var menu = document.querySelector('.menu');
  var menuItem = document.querySelectorAll('.menu__item');
  var menuLink = document.querySelectorAll('.menu__link[href*="#"]');

  const josh = new Josh({
    initClass: "josh-js",
    animateInMobile: true,
    offset: 0.5
  });

  var width100vw = document.documentElement.clientWidth + 'px';
  menu.style.width = width100vw;
  
  var header = document.querySelector('.menu');
  var headerScroll = 'menu--scroll';
  
  if (window.innerWidth < 911) {
    var header = document.querySelector('.header__btn-wrap');
    header.style.width = width100vw;
    var headerScroll = 'header__btn-wrap--scroll';
  }

  var headerBtn = document.querySelector('.header__btn');
  var headerBtnScroll = 'header__btn--scroll';
  window.addEventListener("scroll", () => {
    var scrolY = window.scrollY;
    if (scrolY > 150) {
      header.classList.add(headerScroll);
      headerBtn.classList.add(headerBtnScroll);
    } else {
      header.classList.remove(headerScroll);
      headerBtn.classList.remove(headerBtnScroll);
    }
  });

  function hrefs(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  }

  menuLink.forEach(menuLink => { menuLink.addEventListener('click', hrefs) });


  if (window.innerWidth > 909) {
    menuItem[0].classList.add('menu__item--fil');
    menuItem[1].classList.add('menu__item--fil');
    menuItem[2].classList.add('menu__item--ri');
    menuItem[3].classList.add('menu__item--fir');
    menuItem[4].classList.add('menu__item--fir');
  }

  if (window.innerWidth < 911) {
    function menuFunc() {
      menu.classList.toggle('menu--open');
      headerBtn.classList.toggle('header__btn--active');
    }

    headerBtn.addEventListener('click', menuFunc);
    menuLink.forEach(menuLink => { menuLink.addEventListener('click', menuFunc) });



    function menuAnimate() {
      menuItem[0].classList.toggle('menu__item--fil');
      menuItem[1].classList.toggle('menu__item--fir');
      menuItem[2].classList.toggle('menu__item--ri');
      menuItem[3].classList.toggle('menu__item--fil');
      menuItem[4].classList.toggle('menu__item--fir');

      var clickCounter = document.querySelector('.header__click-counter');
      clickCounter.innerHTML = 1 * clickCounter.innerHTML + 1;
      if (clickCounter.innerHTML > 2) {
        clickCounter.innerHTML = 1;
      }
      if (clickCounter.innerHTML == 2) {
        menuItem[0].classList.add('menu__item--for');
        menuItem[1].classList.add('menu__item--fol');
        menuItem[2].classList.add('menu__item--ro');
        menuItem[3].classList.add('menu__item--for');
        menuItem[4].classList.add('menu__item--fol');
        menu.classList.add('menu--out');
      }
      if (clickCounter.innerHTML == 1) {
        menuItem[0].classList.remove('menu__item--for');
        menuItem[1].classList.remove('menu__item--fol');
        menuItem[2].classList.remove('menu__item--ro');
        menuItem[3].classList.remove('menu__item--for');
        menuItem[4].classList.remove('menu__item--fol');
        menu.classList.remove('menu--out');
      }
    }

    headerBtn.addEventListener('click', menuAnimate);
    menuLink.forEach(menuLink => { menuLink.addEventListener('click', menuAnimate) });
  }

});