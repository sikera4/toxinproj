import '../pages/colors_type/colors_type.scss';
import '../pages/cards/cards.scss';
import '../pages/form_elements/form_elements.scss'
import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/air-datepicker/dist/js/datepicker.min.js';
import '../node_modules/jquery-nice-select/js/jquery.nice-select.js';
import '../node_modules/jquery-nice-select/css/nice-select.css';
import '../node_modules/inputmask/dist/jquery.inputmask.js'

$(function() {
    $('select').niceSelect();
  });

$(function(){
    $('#masked').inputmask("99.99.9999", { "placeholder": "ДД.ММ.ГГГГ" });
});
