import finalCounterCard from '../common.blocks/final-counter-card/final-counter-card';
import menuBtn from '../common.blocks/header/header';
import chartConstruct from '../common.blocks/chart/chart';
import '../pages/scss/room-details.scss';

// eslint-disable-next-line no-undef
$(() => {
  finalCounterCard();
  chartConstruct();
  menuBtn();
});
