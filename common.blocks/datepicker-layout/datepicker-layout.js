/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
import '../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min';

function handleApplyButtonClick() {
  const $datepickers = $('.datepicker-here');
  for (let i = 0; i < $datepickers.length; i += 1) {
    $datepickers.eq(i).datepicker().data('datepicker').hide();
  }
}

function applyButtonInserter() {
  const $applyBtn = $('<span class="apply-button" data-action="apply">применить</span>');
  const $datepickerButtons = $('.datepicker .datepicker--buttons');
  $datepickerButtons.append($applyBtn);
  const $applyButtonSelector = $('.apply-button');
  for (let i = 0; i < $applyButtonSelector.length; i += 1) {
    $applyButtonSelector.eq(i).on('click', handleApplyButtonClick);
  }
}

function handleDayCellsMouseOver() {
  const $rangeFromCell = $('.datepicker .-range-from-');
  const $rangeToCell = $('.datepicker .-range-to-');
  if ($rangeToCell.length > 0) {
    $rangeFromCell.addClass('before');
  }
}

function handleDayCellsMouseLeave() {
  const $rangeFromCell = $('.datepicker .-range-from-');
  const $rangeToCell = $('.datepicker .-range-to-');
  if ($rangeToCell.length === 0) {
    $rangeFromCell.addClass('nobefore');
  }
}

function makeDatepickerStyler() {
  const $datepickerArrow = $('.datepicker .datepicker--pointer');
  const $rangeFromCell = $('.datepicker .-range-from-');
  const $dayCells = $('.datepicker .datepicker--cells-days');
  $rangeFromCell.addClass('nobefore');
  // removing that nasty arrow
  $datepickerArrow.remove();
  $dayCells.on('mouseover', handleDayCellsMouseOver);
  $dayCells.on('mouseleave', handleDayCellsMouseLeave);
}

function makeDatepickerConfig() {
  const $startInput = $('#start');
  const $endInput = $('#end');
  const $datepickers = $('.datepicker-here');
  const startDate = new Date(2019, 7, 19);
  const finalDate = new Date(2019, 7, 23);
  $datepickers.datepicker({
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    clearButton: true,
    navTitles: {
      days: 'MM yyyy',
    },
    offset: 5,
    startDate: startDate,
    range: true,
    multipleDatesSeparator: '-',
    // eslint-disable-next-line no-unused-vars
    onSelect: function (fd, date) {
      $endInput.data('datepicker').update('selectedDates', $startInput.data('datepicker').selectedDates);
      const start = fd.split('-')[0];
      const end = fd.split('-')[1];
      if (end) {
        $startInput.val(start);
        $endInput.val(end);
      } else {
        $endInput.val('');
      }
    },
  }).data('datepicker').selectDate(startDate, finalDate);
}

function makeDatepickerLauncher() {
  makeDatepickerConfig();
  // inserting apply button
  applyButtonInserter();
  // making date selection look gorgeous :P
  makeDatepickerStyler();
}

export default makeDatepickerLauncher;
