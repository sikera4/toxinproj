import '../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import '../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import '../pages/form_elements/form_elements.scss';
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min';
import 'inputmask/dist/jquery.inputmask';
import * as noUiSlider from 'nouislider/distribute/nouislider.js';
import '../node_modules/nouislider/distribute/nouislider.css';
import * as wNumb from 'wnumb';

$(function() {
    $('.masked input').inputmask("99.99.9999", { "placeholder": "ДД.ММ.ГГГГ" });
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
    $('.room-type .iqdropdown').iqDropdown({
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
});

$(function() {
    $('.guests-info .iqdropdown').iqDropdown({
      controls: {
        controlsCls: 'new-controls',
      },
      setSelectionText: (itemCount, totalItems) => {
        console.log('lol');
        let res = [];
        let clearbl = $('.guests-info .clear').eq(1);
        clearbl.on('click', (e) => {
          return totalItems = 0;
        })
        if (totalItems === 0) {
          res.push(`Сколько гостей`);
        } else if (totalItems === 1) {
          res.push(`1 гость`);
        } else if (totalItems > 1 && totalItems < 5) {
          res.push(`${totalItems} гостя`);
        } else if (totalItems >= 5) {
          res.push(`${totalItems} гостей`);
        }
        if (totalItems > 0) { 
          clearbl.removeClass('not-visible');
        } else {
          if (!clearbl.hasClass('not-visible')) {
            clearbl.addClass('not-visible');
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
        return res;
      },
    });
  });