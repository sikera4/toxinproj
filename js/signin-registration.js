/* eslint-disable no-undef */
import '../pages/scss/signin-registration.scss';
import makeRegistrationCardLauncher from '../common.blocks/registration-card/registration-card';
import makeMenuBtnClicker from '../common.blocks/header/header';

function handleSigninRegistrateButtonClick() {
  const $registrationCard = $('.js-entry-page__registration-card');
  const $entryCard = $('.js-entry-page__entry-card');
  $registrationCard.toggleClass('display-none');
  $entryCard.toggleClass('display-none');
}
function makeCardChanger() {
  const $emptyButton = $('.js-entry-page .js-card-switch-button');
  $emptyButton.on('click', handleSigninRegistrateButtonClick);
}
function makeSignInRegistrationPageElementsLauncher() {
  makeCardChanger();
  makeRegistrationCardLauncher();
  makeMenuBtnClicker();
}
$(makeSignInRegistrationPageElementsLauncher());
