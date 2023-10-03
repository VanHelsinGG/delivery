import $ from 'jquery';
import { Cookies } from './functions';

$(function () {
    $('#aceitar-cookies').on('click', function () {
        Cookies.acceptCookie(true);
    });

    $('#recusar-cookies').on('click', function () {
        Cookies.acceptCookie(false);
    });

    Cookies.toggleCookieAlert();
});
