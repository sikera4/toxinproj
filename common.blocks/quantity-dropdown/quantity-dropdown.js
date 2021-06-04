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
  const $clearBlock = $('.js-guests-info .js-clear').eq(clearBlockNum);
  if (totalItems > 0) {
    $clearBlock.removeClass('not-visible');
  } else if (!$clearBlock.hasClass('not-visible')) {
    $clearBlock.addClass('not-visible');
  }
}

function handleClearButtonClick() {
  // it's the best i could come up with
  const $newControls = $('.new-controls');
  $newControls.remove();
  const $dropdownContainer = $('.js-guests-info');
  const $removedDropdown = $('.js-guests-info .js-iqdropdown').remove();
  $dropdownContainer.append($removedDropdown);
  // eslint-disable-next-line no-use-before-define
  makeGuestsInfoDropdown();
}

function makeClearButtonClickHandler() {
  const $clearButton = $('.js-guests-info .js-clear');
  $clearButton.on('click', handleClearButtonClick);
}

function makeGuestsInfoDropdown(clearBlockNum) {
  const $dropdown = $('.js-guests-info .js-iqdropdown');
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
  makeClearButtonClickHandler(clearBlockNum);
}

function makeRoomTypeDropdown() {
  const $dropdown = $('.js-room-type .js-iqdropdown');
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

function makeDropdownLauncher(data, clearBlockNum) {
  if (data === 'guests-info') {
    makeGuestsInfoDropdown(clearBlockNum);
  } else if (data === 'room-type') {
    makeRoomTypeDropdown();
  }
}

export default makeDropdownLauncher;
