import {finalCounterCard} from '../common.blocks/final-counter-card/final-counter-card.js';
import {menuBtn} from '../common.blocks/header/header';
import {chartConstruct} from '../common.blocks/chart/chart';
import '../pages/scss/room-details.scss';



$(function() {
    finalCounterCard();
    chartConstruct();
    menuBtn();
})

