import '../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import '../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min';
import 'inputmask/dist/jquery.inputmask';
import '../pages/cards/cards.scss';

$(function() {
    $('.masked input').inputmask("99.99.9999", { "placeholder": "ДД.ММ.ГГГГ" });
});

$(function() {
    $('.guests-info .iqdropdown').iqDropdown({
      controls: {
        controlsCls: 'new-controls',
      },
      setSelectionText: (itemCount, totalItems) => {
        let res = [];
        let clearbl = $('.guests-info .clear').eq(0);
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