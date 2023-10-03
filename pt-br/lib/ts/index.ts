import $ from 'jquery'
import * as func from "../../../core/lib/ts/functions";

$('#aceitar-cookies').on('click', function () {
    func.Cookies.acceptCookie(true);
});

$('#recusar-cookies').on('click', function () {
    func.Cookies.acceptCookie(false);
});

$(document).on('ready', function() {
    func.Cookies.toggleCookieAlert();
});