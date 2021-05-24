import '../pages/scss/cards.scss';
import { datepickerData } from '../common.blocks/datepicker-layout/datepicker-layout';
import { maskedInput } from '../common.blocks/text-field/text-field';
import { iqDropdown } from '../common.blocks/quantity-dropdown/quantity-dropdown';

function finalCall() {
  datepickerData();
  maskedInput();
  iqDropdown('guests-info');
  
};
finalCall();
