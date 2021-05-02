function checkList() {
    for (let i = 0; i < $('.expchecklist').length; i++) {
        $('.expchecklist').eq(i).children('h3').eq(0).on('click', (e) => {
          let checkboxes = $('.expchecklist').eq(i).children('.checkboxes').eq(0);
          checkboxes.toggleClass('closed');
          let icon = $('.expchecklist').eq(i).find('.material-icons').eq(0);
          if (checkboxes.hasClass('closed')) {
            icon.text('expand_more');
          } else {
            icon.text('expand_less');
          }
        });
    }
}
export {checkList};