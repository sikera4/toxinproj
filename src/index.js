import '../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import '../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
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
    decimals: 0,
    thousand: ' '
  })
});

sliderOutput.text(`5000₽ - 10000₽`);

slider.noUiSlider.on('update', function(values) {
  sliderOutput.text(`${values[0]}₽ - ${values[1]}₽`);
})

$(function() {
    $('select').niceSelect();
});

$(function() {
    $('#masked').inputmask("99.99.9999", { "placeholder": "ДД.ММ.ГГГГ" });
});

for (let i = 0; i < $('.expchecklist').length; i++) {
  $('.expchecklist').eq(i).children('h3').eq(0).on('click', (e) => {
    let checkboxes = $('.expchecklist').eq(i).children('.checkboxes').eq(0);
    checkboxes.toggleClass('closed');
    let icon = $('.expchecklist').eq(i).find('.material-icons').eq(0);
    if (checkboxes.hasClass('closed')) {
      icon.text('expand_more');
    } else {
      icon.text('expand_less');
    }
  });
}


$(function() {
  $('.col1 .iqdropdown').iqDropdown({
    controls: {
      controlsCls: 'new-controls',
    },
    setSelectionText: (itemCount, totalItems) => {
      let res = [];
      let entrs = Object.entries(itemCount);
      for (let i in entrs) {
        if (entrs[i][1] > 0) {
          if (entrs[i][1] > 1) {
            switch (entrs[i][0]) {
              case "спальня":
                res.push(`${entrs[i][1]} спальни`);
                break;
              case "кровать":
                res.push(`${entrs[i][1]} кровати`);
                break;
              case "ванная комната":
                res.push(`${entrs[i][1]} ванных комнат`);
                break;
              case ("взрослые" || "дети" || "младенцы"):
                if (totalItems < 5) {
                  res.push(`${totalItems} гостя`);
                } else {
                  res.push(`${totalItems} гостей`);
                }
                break;
            }
          } else {
            if (entrs[i][0] === ("взрослые" || "дети" || "младенцы")) {
              res.push(`${totalItems} гость`);
            } else {
              res.push(`${entrs[i][1]} ${entrs[i][0]}`);
            }
          }
        }
      }
      let drdcount = $('.counter');
      for (let c = 0; c < drdcount.length; c++) {
        if (drdcount.eq(c).text() === '0') {
          drdcount.eq(c).siblings('.button-decrement').addClass('disabled');
        } else {
          drdcount.eq(c).siblings('.button-decrement').removeClass('disabled');
        }
      }
      if (res.length > 1) {
        return res.slice(0, 2).join(', ') + '...';
      } else {
        return res;
      }
    },
  });
});

$(function() {
  $('.col2 .iqdropdown').iqDropdown({
    controls: {
      controlsCls: 'new-controls',
    },
    setSelectionText: (itemCount, totalItems) => {
      let res = [];
      if (totalItems === 0) {
        res.push(`Сколько гостей`);
      } else if (totalItems === 1) {
        res.push(`1 гость`);
      } else if (totalItems > 1 && totalItems < 5) {
        res.push(`${totalItems} гостя`);
      } else if (totalItems >= 5) {
        res.push(`${totalItems} гостей`);
      }
      let drdcount = $('.counter');
      for (let c = 0; c < drdcount.length; c++) {
        if (drdcount.eq(c).text() === '0') {
          drdcount.eq(c).siblings('.button-decrement').addClass('disabled');
        } else {
          drdcount.eq(c).siblings('.button-decrement').removeClass('disabled');
        }
      }
      return res;
    },
  });
});