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
export {datepicker, changer, final};
