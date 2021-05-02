import 'inputmask/dist/jquery.inputmask';

function maskedInput() {
    $('.masked input').inputmask("99.99.9999", { "placeholder": "ДД.ММ.ГГГГ" });
}
export {maskedInput};