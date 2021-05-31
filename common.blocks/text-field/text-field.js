/* eslint-disable no-undef */
import 'inputmask/dist/jquery.inputmask';

function maskedInputLauncher() {
  const $maskedInput = $('.masked input');
  // eslint-disable-next-line quote-props
  $maskedInput.inputmask('99.99.9999', { 'placeholder': 'ДД.ММ.ГГГГ' });
}
export default maskedInputLauncher;
