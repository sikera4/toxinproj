/* eslint-disable no-undef */
function handleMenuButtonClick() {
  const $btn = $('.js-header__menu-btn');
  const $hamburger = $('.js-header__menu-btn-burger');
  const $rightsideContent = $('.js-header__rightside-content');
  const $nav = $('.js-header__nav');
  const $navChildren = $('.js-header__nav').children();
  const $headerBtns = $('.js-header__buttons');
  $btn.toggleClass('open');
  $hamburger.toggleClass('open');
  $rightsideContent.toggleClass('open');
  $nav.toggleClass('open');
  $navChildren.toggleClass('open');
  $headerBtns.toggleClass('open');
}

function makeMenuBtnClicker() {
  const $btn = $('.js-header__menu-btn');
  $btn.on('click', handleMenuButtonClick);
}

export default makeMenuBtnClicker;
