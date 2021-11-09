'use strict';
/* eslint-disable */

//JS Sticky header
$(document).scroll(() => {
  if ($(document).scrollTop() > 0) {
    $('.header').addClass('header--scroll');
    $('.menu__icon').addClass('menu__icon--scroll');

    $('.logo--top').css({display: 'none'});
    $('.logo--scroll').css({display: 'flex'});

    $('.menu__link').addClass('menu__link--scroll');
  } else {
    $('.header').removeClass('header--scroll');
    $('.menu__icon').removeClass('menu__icon--scroll');

    $('.logo--top').css({display: 'flex'});
    $('.logo--scroll').css({display: 'none'});

    $('.menu__link').removeClass('menu__link--scroll');
  }
});

//JS Burger menu
const closeMemu = () => {
  $('.menu__button').toggleClass('menu__button--open');
  $('.menu__list').toggleClass('menu__list--open');
}

$('.menu__button').click(() => {
  closeMemu()
});

$('.menu__link').click(() => {
  closeMemu()
});

//JS Slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.slider__arrow--r',
    prevEl: '.slider__arrow--l',
  },
});

//JS Phone mask
$('#user-phone').focus(() => {
  const userTel = document.querySelector('#user-phone');
  const maskOptions = {
    mask: '+38(000)000-00-00',
    lazy: false,
  };

  const mask = new IMask(userTel, maskOptions);
});

//JS Form submit (fake)
$('.feedback').submit((event) => {
  event.preventDefault();

  alert('Данные отправлены');
  $('.feedback').trigger('reset');
});
