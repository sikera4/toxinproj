import { iqDropdown } from '../common.blocks/quantity-dropdown/quantity-dropdown';
import { maskedInput } from '../common.blocks/text-field/text-field';
import { datepickerData } from '../common.blocks/datepicker-layout/datepicker-layout';
import { sliderActivation } from '../common.blocks/range-slider/range-slider';
import { checkList } from '../common.blocks/expandable-checkbox-list/expandable-checkbox-list';
console.log('lol');
$(function() {
  checkList();
  sliderActivation();
  iqDropdown('room-type');
  iqDropdown('guests-info');
  maskedInput();
  datepickerData();
})
 import '../pages/form_elements/form_elements.scss';