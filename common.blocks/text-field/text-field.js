/* eslint-disable no-undef */
import 'inputmask/dist/jquery.inputmask';

function maskedInput() {
  // eslint-disable-next-line quote-props
  $('.masked input').inputmask('99.99.9999', { 'placeholder': 'ДД.ММ.ГГГГ' });
}
export default maskedInput;
