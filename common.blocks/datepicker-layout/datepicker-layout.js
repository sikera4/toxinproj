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
    let startDate = new Date(2019, 7, 8);
    $('.calendar-layout .datepicker-here').datepicker({
        prevHtml: '<span class="material-icons">arrow_back</span>',
        nextHtml: '<span class="material-icons">arrow_forward</span>',
        clearButton: true,
        navTitles: {
            days: 'MM yyyy'
        },
        startDate: startDate,
        range: true
    }).data('datepicker').selectDate(startDate);
    let applyBtn = $('<span class="datepicker--button" data-action="apply">применить</span>');
    $('.datepicker-here .datepicker--buttons').append(applyBtn);
    console.log($('.datepicker-here .datepicker--buttons').length)
}

export {datepickerData};
