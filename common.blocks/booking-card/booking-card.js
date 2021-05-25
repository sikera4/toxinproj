import { iqDropdown } from '../quantity-dropdown/quantity-dropdown';
import { datepickerData } from '../datepicker-layout/datepicker-layout';

function bookingCard() {
    iqDropdown('guests-info', 0);
    datepickerData();
}

export {bookingCard};