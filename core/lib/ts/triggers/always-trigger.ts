import $ from 'jquery';
import { CookiesUtil } from '../functions/cookies';

$(function () {
    $('#aceitar-cookies').on('click', function () {
        CookiesUtil.acceptCookie(true);
    });

    $('#recusar-cookies').on('click', function () {
        CookiesUtil.acceptCookie(false);
    });

    CookiesUtil.toggleCookieAlert();
});
