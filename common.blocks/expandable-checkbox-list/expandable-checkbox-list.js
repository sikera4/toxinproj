/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
function checkList() {
  for (let i = 0; i < $('.expchecklist').length; i += 1) {
    $('.expchecklist').eq(i).children('.expchecklist__header').eq(0)
      .on('click', () => {
        const checkboxes = $('.expchecklist').eq(i).children('.expchecklist__checkboxes').eq(0);
        checkboxes.toggleClass('closed');
        const icon = $('.expchecklist').eq(i).find('.material-icons').eq(0);
        if (checkboxes.hasClass('closed')) {
          icon.text('expand_more');
        } else {
          icon.text('expand_less');
        }
      });
  }
}
export default checkList;
