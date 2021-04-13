import '../pages/colors_type/colors_type.scss';
import '../pages/cards/cards.scss';
import '../pages/form_elements/form_elements.scss'
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/air-datepicker/dist/js/datepicker.min.js';
import '../node_modules/jquery-nice-select/js/jquery.nice-select.js';
import '../node_modules/jquery-nice-select/css/nice-select.css';
import '../node_modules/inputmask/dist/jquery.inputmask.js';
import * as noUiSlider from 'nouislider/distribute/nouislider.js';
import '../node_modules/nouislider/distribute/nouislider.css';
import * as wNumb from '../node_modules/wnumb/wNumb.js';
let slider = document.getElementById('rangeslider');
let sliderOutput = $('.output').eq(0);

noUiSlider.create(slider, {
  start: [5000, 10000],
  connect: true,
  range: {
    'min': 0,
    'max': 15000
  },
  format: wNumb({
    decimals: 0
  })
});

sliderOutput.text(`5000₽ - 10000₽`);

slider.noUiSlider.on('update', function(values) {
  sliderOutput.text(`${values[0]}₽ - ${values[1]}₽`);
})

$(function() {
    $('select').niceSelect();
});

$(function(){
    $('#masked').inputmask("99.99.9999", { "placeholder": "ДД.ММ.ГГГГ" });
});

