import makeFinalCounterCardLauncher from '../common.blocks/final-counter-card/final-counter-card';
import makeMenuBtnClicker from '../common.blocks/header/header';
import makeChartConstructor from '../common.blocks/chart/chart';
import '../pages/scss/room-details.scss';

function makeRoomDetailsElementsLauncher() {
  makeFinalCounterCardLauncher();
  makeMenuBtnClicker();
  makeChartConstructor();
}
// eslint-disable-next-line no-undef
$(makeRoomDetailsElementsLauncher());
