import '../pages/scss/cards.scss';
import makeDatepickerLauncher from '../common.blocks/datepicker-layout/datepicker-layout';
import maskedInputLauncher from '../common.blocks/text-field/text-field';
import makeDropdownLauncher from '../common.blocks/quantity-dropdown/quantity-dropdown';

function makeCardsElementsLauncher() {
  makeDatepickerLauncher();
  maskedInputLauncher();
  makeDropdownLauncher('guests-info');
}

// eslint-disable-next-line no-undef
$(makeCardsElementsLauncher());
