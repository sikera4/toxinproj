/* eslint-disable no-undef */
import '../pages/scss/signin-registration.scss';
import registrationCard from '../common.blocks/registration-card/registration-card';
import menuBtn from '../common.blocks/header/header';

function cardChange() {
  const $emptyButton = $('.entry-page .button_empty');
  const $registrationCard = $('.entry-page__registration-card');
  const $entryCard = $('.entry-page__entry-card');
  $emptyButton.on('click', () => {
    $registrationCard.toggleClass('display-none');
    $entryCard.toggleClass('display-none');
  });
}

$(() => {
  cardChange();
  registrationCard();
  menuBtn();
});
