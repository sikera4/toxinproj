/* eslint-disable no-undef */
import '../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import '../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min';

function decrementButtonDisabler() {
  const $drdcount = $('.counter');
  for (let c = 0; c < $drdcount.length; c += 1) {
    if ($drdcount.eq(c).text() === '0') {
      $drdcount.eq(c).siblings('.button-decrement').addClass('disabled');
    } else {
      $drdcount.eq(c).siblings('.button-decrement').removeClass('disabled');
    }
  }
}

function clearButtonConfig(totalItems, clearBlockNum) {
  const $clearbl = $('.guests-info .clear').eq(clearBlockNum);
  if (totalItems > 0) {
    $clearbl.removeClass('not-visible');
  } else if (!$clearbl.hasClass('not-visible')) {
    $clearbl.addClass('not-visible');
  }
}

function guestsInfoDropdownConfig(clearBlockNum) {
  const $dropdown = $('.guests-info .iqdropdown');
  $dropdown.iqDropdown({
    controls: {
      controlsCls: 'new-controls',
    },
    setSelectionText: (itemCount, totalItems) => {
      const res = [];
      const entrs = Object.entries(itemCount);
      const guestsNum = entrs[0][1] + entrs[1][1];
      const babiesNum = entrs[2][1];
      if (totalItems === 0) {
        res.push('Сколько гостей');
      } else if (guestsNum === 1) {
        res.push('1 гость');
      } else if (guestsNum > 1 && guestsNum < 5) {
        res.push(`${guestsNum} гостя`);
      } else if (guestsNum >= 5) {
        res.push(`${guestsNum} гостей`);
      }
      if (guestsNum > 0) {
        if (babiesNum === 1) {
          res.push(`, ${babiesNum} младенец`);
        } else if (babiesNum > 1 && babiesNum < 5) {
          res.push(`, ${babiesNum} младенца`);
        } else if (babiesNum >= 5) {
          res.push(`, ${babiesNum} младенцев`);
        }
      }
      decrementButtonDisabler();
      clearButtonConfig(totalItems, clearBlockNum);
      return res;
    },
  });
}

function roomTypeDropdownConfig() {
  const $dropdown = $('.room-type .iqdropdown');
  $dropdown.iqDropdown({
    controls: {
      controlsCls: 'new-controls',
    },
    setSelectionText: (itemCount, totalItems) => {
      const res = [];
      Object.entries(itemCount).forEach((entry) => {
        if (entry[1] > 0) {
          if (entry[1] > 1) {
            switch (entry[0]) {
              case 'спальня':
                res.push(`${entry[1]} спальни`);
                break;
              case 'кровать':
                res.push(`${entry[1]} кровати`);
                break;
              case 'ванная комната':
                res.push(`${entry[1]} ванных комнат`);
                break;
              case ('взрослые' || 'дети' || 'младенцы'):
                if (totalItems < 5) {
                  res.push(`${totalItems} гостя`);
                } else {
                  res.push(`${totalItems} гостей`);
                }
                break;
              default:
            }
          }
        }
      });
      decrementButtonDisabler();
      if (res.length > 1) {
        return `${res.slice(0, 2).join(', ')}...`;
      }
      return res;
    },
  });
}

function iqDropdown(data, clearBlockNum) {
  if (data === 'guests-info') {
    guestsInfoDropdownConfig(clearBlockNum);
  } else if (data === 'room-type') {
    roomTypeDropdownConfig();
  }
}

export default iqDropdown;
