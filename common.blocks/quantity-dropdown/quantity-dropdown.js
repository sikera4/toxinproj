import '../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import '../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';

function iqDropdown(data) {
    if (data === 'guests-info') {
        $(`.${data} .iqdropdown`).iqDropdown({
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
    } else if (data === 'room-type') {
        $(`.${data} .iqdropdown`).iqDropdown({
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
    }
}

export {iqDropdown};