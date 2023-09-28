import $ from 'jquery';

export class Functions {
    public static copyrightYear(): void {
        const copyrightYearElement = $('#copyright-year');
        if (copyrightYearElement.length) {
            const year = new Date().getFullYear();
            copyrightYearElement.text(year);
        }
    }

    public static changePasswordVisibility(element: JQuery): void {
        if (element.length) {
            const currentType = element.attr('type');
            element.attr('type', currentType === 'password' ? 'text' : 'password');
        }
    }
}
