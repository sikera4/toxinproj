/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
function toggleClassClosed(element) {
  element.toggleClass('closed');
}
function changeCheckboxListArrows(checkbox, arrow) {
  if (checkbox.hasClass('closed')) {
    arrow.text('expand_more');
  } else {
    arrow.text('expand_less');
  }
}
function makeCheckListOpener() {
  const $expandableCheckboxList = $('.js-expchecklist');
  for (let i = 0; i < $expandableCheckboxList.length; i += 1) {
    const $checkListHeader = $expandableCheckboxList.eq(i).children('.js-expchecklist__header');
    $checkListHeader.eq(0)
      .on('click', () => {
        const $checkboxes = $('.js-expchecklist').eq(i).children('.js-expchecklist__checkboxes').eq(0);
        toggleClassClosed($checkboxes);
        const $icon = $('.js-expchecklist').eq(i).find('.js-material-icons').eq(0);
        changeCheckboxListArrows($checkboxes, $icon);
      });
  }
}
export default makeCheckListOpener;
