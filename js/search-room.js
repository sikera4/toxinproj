import { iqDropdown } from '../common.blocks/quantity-dropdown/quantity-dropdown';
import { checkList } from '../common.blocks/expandable-checkbox-list/expandable-checkbox-list';
import { sliderActivation } from '../common.blocks/range-slider/range-slider';
import { menuBtn } from '../common.blocks/header/header';
function filter() {
    let filterHeader = $('.search-room__filter-header');
    let filterSettings = $('.search-room__filter-settings');
    filterHeader.on('click', function() {
        filterSettings.toggleClass('open');
    })
}

$(function() {
    checkList();
    iqDropdown('guests-info');
    iqDropdown('room-type');
    sliderActivation();
    filter();
    menuBtn();
})


import '../pages/scss/search-room.scss';