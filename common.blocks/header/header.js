function menuBtn() {
    const menuBtn = $('.header__menu-btn');
    const hamburger = $('.header__menu-btn-burger');
    const rightsideContent = $('.header__rightside-content');
    const nav = $('.header__nav');
    const navChildren = $('.header__nav').children();
    const headerBtns = $('.header__buttons');
    $('.header__menu-btn').on('click', function() {
        menuBtn.toggleClass('open');
        hamburger.toggleClass('open');
        rightsideContent.toggleClass('open');
        nav.toggleClass('open');
        navChildren.toggleClass('open');
        headerBtns.toggleClass('open');
    })
}

export {menuBtn};