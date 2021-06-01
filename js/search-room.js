/* eslint-disable no-undef */
import makeDropdownLauncher from '../common.blocks/quantity-dropdown/quantity-dropdown';
import makeCheckListOpener from '../common.blocks/expandable-checkbox-list/expandable-checkbox-list';
import makeSliderActivator from '../common.blocks/range-slider/range-slider';
import makeMenuBtnClicker from '../common.blocks/header/header';
import '../pages/scss/search-room.scss';

function handleFilterHeaderClick() {
  const $filterSettings = $('.js-search-room__filter-settings');
  $filterSettings.toggleClass('open');
}
function makeFilterOpener() {
  const $filterHeader = $('.js-search-room__filter-header');
  $filterHeader.on('click', handleFilterHeaderClick);
}
function makeSearchRoomElementsLauncher() {
  makeCheckListOpener();
  makeDropdownLauncher('guests-info', 0);
  makeDropdownLauncher('room-type');
  makeSliderActivator();
  makeFilterOpener();
  makeMenuBtnClicker();
}
$(makeSearchRoomElementsLauncher());
