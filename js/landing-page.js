import makeMenuBtnClicker from '../common.blocks/header/header';
import makeBookingCardLauncher from '../common.blocks/booking-card/booking-card';
import '../favicons/favicons';
import '../pages/scss/landing-page.scss';

function makeLandingPageElementsLauncher() {
  makeMenuBtnClicker();
  makeBookingCardLauncher();
}
// eslint-disable-next-line no-undef
$(makeLandingPageElementsLauncher());
