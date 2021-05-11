import '../pages/signin_registration/signin-registration.scss';
import {registrationCard} from '../common.blocks/registration-card/registration-card';

function cardChange() {
    $('.entry-page .button_empty').on('click', function() {
        $('.entry-page__registration-card').toggleClass('display-none');
        $('.entry-page__entry-card').toggleClass('display-none');
    })
}

$(function() {
    cardChange();
    registrationCard();
})

