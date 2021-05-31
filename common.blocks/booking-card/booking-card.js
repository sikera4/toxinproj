import makeDropdownLauncher from '../quantity-dropdown/quantity-dropdown';
import makeDatepickerLauncher from '../datepicker-layout/datepicker-layout';

function makeBookingCardLauncher() {
  makeDropdownLauncher('guests-info', 0);
  makeDatepickerLauncher();
}

export default makeBookingCardLauncher;
