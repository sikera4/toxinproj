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
  const $expandableCheckboxList = $('.expchecklist');
  for (let i = 0; i < $expandableCheckboxList.length; i += 1) {
    const $checkListHeader = $expandableCheckboxList.eq(i).children('.expchecklist__header');
    $checkListHeader.eq(0)
      .on('click', () => {
        const $checkboxes = $('.expchecklist').eq(i).children('.expchecklist__checkboxes').eq(0);
        toggleClassClosed($checkboxes);
        const $icon = $('.expchecklist').eq(i).find('.material-icons').eq(0);
        changeCheckboxListArrows($checkboxes, $icon);
      });
  }
}
export default makeCheckListOpener;
