/* eslint-disable no-undef */
function menuBtn() {
  const btn = $('.header__menu-btn');
  const hamburger = $('.header__menu-btn-burger');
  const rightsideContent = $('.header__rightside-content');
  const nav = $('.header__nav');
  const navChildren = $('.header__nav').children();
  const headerBtns = $('.header__buttons');
  $('.header__menu-btn').on('click', () => {
    btn.toggleClass('open');
    hamburger.toggleClass('open');
    rightsideContent.toggleClass('open');
    nav.toggleClass('open');
    navChildren.toggleClass('open');
    headerBtns.toggleClass('open');
  });
}

export default menuBtn;
