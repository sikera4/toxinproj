import iqDropdown from '../common.blocks/quantity-dropdown/quantity-dropdown';
import maskedInput from '../common.blocks/text-field/text-field';
import sliderActivation from '../common.blocks/range-slider/range-slider';
import checkList from '../common.blocks/expandable-checkbox-list/expandable-checkbox-list';
import '../pages/scss/form-elements.scss';

// eslint-disable-next-line no-undef
$(() => {
  checkList();
  sliderActivation();
  iqDropdown('room-type');
  iqDropdown('guests-info', 2);
  maskedInput();
});
