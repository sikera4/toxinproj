import '../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min';

function datepickerData() {
    let $start = $('#start');
    let $end = $('#end');
    let datepickers = $('.datepicker-here');
    let startDate = new Date(2019, 7, 19);
    let finalDate = new Date(2019, 7, 23);
    datepickers.datepicker({
        prevHtml: '<span class="material-icons">arrow_back</span>',
        nextHtml: '<span class="material-icons">arrow_forward</span>',
        clearButton: true,
        navTitles: {
            days: 'MM yyyy'
        },
        offset: 5,
        startDate: startDate,
        range: true,
        multipleDatesSeparator: '-',
        onSelect: function(fd, date) {
            $end.data('datepicker').update('selectedDates', $start.data('datepicker').selectedDates);
            let start = fd.split('-')[0];
            let end = fd.split('-')[1];
            if (end) {
                $start.val(start);
                $end.val(end);
            } else {
                $end.val('');
            }
            console.log($start.data('datepicker'));
        }
    }).data('datepicker').selectDate(startDate, finalDate);
    // removing that nasty arrow
    $('.datepicker .datepicker--pointer').remove();
    // inserting apply button
    let applyBtn = $('<span class="apply-button" data-action="apply">применить</span>');
    $('.datepicker .datepicker--buttons').append(applyBtn);
    $("[data-action='apply']").on('click', function() {
        datepickers.datepicker().data('datepicker').hide();
        console.log('lol');
    })
    // making date selection look gorgeous :P
    $('.datepicker .-range-from-').addClass('nobefore');
    $('.datepicker .datepicker--cells-days').on('mouseover', function() {
        if ($('.datepicker .-range-to-').length > 0) {
            $('.datepicker .-range-from-').addClass('before');
        }
    })
    $('.datepicker .datepicker--cells-days').on('mouseleave', function() {
        if ($('.datepicker .-range-to-').length === 0) {
            $('.datepicker .-range-from-').addClass('nobefore');
        }
    })
}

export {datepickerData};
