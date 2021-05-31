/* eslint-disable no-undef */
function handleMenuButtonClick() {
  const $btn = $('.header__menu-btn');
  const $hamburger = $('.header__menu-btn-burger');
  const $rightsideContent = $('.header__rightside-content');
  const $nav = $('.header__nav');
  const $navChildren = $('.header__nav').children();
  const $headerBtns = $('.header__buttons');
  $btn.toggleClass('open');
  $hamburger.toggleClass('open');
  $rightsideContent.toggleClass('open');
  $nav.toggleClass('open');
  $navChildren.toggleClass('open');
  $headerBtns.toggleClass('open');
}

function makeMenuBtnClicker() {
  const $btn = $('.header__menu-btn');
  $btn.on('click', handleMenuButtonClick);
}

export default makeMenuBtnClicker;
