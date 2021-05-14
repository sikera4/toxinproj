import { datepickerData } from '../common.blocks/datepicker-layout/datepicker-layout';
import { maskedInput } from '../common.blocks/text-field/text-field';
import { iqDropdown } from '../common.blocks/quantity-dropdown/quantity-dropdown';

$(function() {
  datepickerData();
  maskedInput();
  iqDropdown('guests-info');
});

import '../pages/scss/cards.scss';