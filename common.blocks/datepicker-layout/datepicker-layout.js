function datepicker() {
    let arrows = $('.datepicker .datepicker--nav-action');
    for (let i in arrows) {
        if (arrows.eq(i).attr('data-action') === 'prev') {
            arrows.eq(i).find('svg').replaceWith('<span class="material-icons">arrow_back</span>');
        } else {
            arrows.eq(i).find('svg').replaceWith('<span class="material-icons">arrow_forward</span>');
        }
    }
}
function changer() {
    $('.datepicker').on('click', datepicker);
}
function final() {
    datepicker();
    changer();
}
function datepickerData() {
    let startDate = new Date(2019, 7, 19);
    let finalDate = new Date(2019, 7, 23);
    $('.calendar-layout .datepicker-here').datepicker({
        prevHtml: '<span class="material-icons">arrow_back</span>',
        nextHtml: '<span class="material-icons">arrow_forward</span>',
        clearButton: true,
        navTitles: {
            days: 'MM yyyy'
        },
        startDate: startDate,
        range: true,
    }).data('datepicker').selectDate(startDate, finalDate);
    let applyBtn = $('<span class="datepicker--button" data-action="apply">применить</span>');
    $('.datepicker-here .datepicker--buttons').append(applyBtn);
    console.log($('.datepicker-here .datepicker--buttons').length)
    $('.datepicker-here .-range-from-').addClass('nobefore');
    $('.datepicker-here .datepicker--cell-day').on('mouseleave', function() {
        if ($('.datepicker-here .-range-to-').length === 0) {
            $('.datepicker-here .-range-from-').addClass('nobefore');
        }
    })
}

export {datepickerData};
