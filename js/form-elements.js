import makeDropdownLauncher from '../common.blocks/quantity-dropdown/quantity-dropdown';
import maskedInputLauncher from '../common.blocks/text-field/text-field';
import makeSliderActivator from '../common.blocks/range-slider/range-slider';
import makeCheckListOpener from '../common.blocks/expandable-checkbox-list/expandable-checkbox-list';
import '../pages/scss/form-elements.scss';

function makeFormElementsLauncher() {
  makeCheckListOpener();
  makeSliderActivator();
  makeDropdownLauncher('room-type');
  makeDropdownLauncher('guests-info', 2);
  maskedInputLauncher();
}

// eslint-disable-next-line no-undef
$(makeFormElementsLauncher());
