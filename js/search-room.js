import { iqDropdown } from '../common.blocks/quantity-dropdown/quantity-dropdown';
import { checkList } from '../common.blocks/expandable-checkbox-list/expandable-checkbox-list';
import { sliderActivation } from '../common.blocks/range-slider/range-slider';

$(function() {
    checkList();
    iqDropdown('guests-info');
    iqDropdown('room-type');
    sliderActivation();
})


import '../pages/search_room/search-room.scss';