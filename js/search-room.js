/* eslint-disable no-undef */
import iqDropdown from '../common.blocks/quantity-dropdown/quantity-dropdown';
import checkList from '../common.blocks/expandable-checkbox-list/expandable-checkbox-list';
import sliderActivation from '../common.blocks/range-slider/range-slider';
import menuBtn from '../common.blocks/header/header';
import '../pages/scss/search-room.scss';

function filter() {
  const filterHeader = $('.search-room__filter-header');
  const filterSettings = $('.search-room__filter-settings');
  filterHeader.on('click', () => {
    filterSettings.toggleClass('open');
  });
}

$(() => {
  checkList();
  iqDropdown('guests-info');
  iqDropdown('room-type');
  sliderActivation();
  filter();
  menuBtn();
});
