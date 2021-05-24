import { iqDropdown } from '../common.blocks/quantity-dropdown/quantity-dropdown';
import { datepickerData } from '../common.blocks/datepicker-layout/datepicker-layout';
import { menuBtn } from '../common.blocks/header/header';
import '../pages/scss/landing-page.scss';
$(function () {
    iqDropdown('guests-info');
    datepickerData();
    menuBtn();
})

