/* eslint-disable quote-props */
/* eslint-disable no-undef */
import * as noUiSlider from 'nouislider/distribute/nouislider';
import '../../node_modules/nouislider/distribute/nouislider.css';
import * as wNumb from 'wnumb';

function makeSliderActivator() {
  const slider = document.getElementById('rangeslider');
  const $sliderOutput = $('.js-rangeslider__output').eq(0);

  noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
      'min': 0,
      'max': 15000,
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
    }),
  });
  $sliderOutput.text('5000₽ - 10000₽');
  slider.noUiSlider.on('update', (values) => {
    $sliderOutput.text(`${values[0]}₽ - ${values[1]}₽`);
  });
}

export default makeSliderActivator;
