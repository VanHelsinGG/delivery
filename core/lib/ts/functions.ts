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

export class Cookies {
    public static getCookiePreference(): boolean {
        return !!localStorage.getItem('cookie');
    }

    public static acceptCookie(preference: boolean): void {
        localStorage.setItem('cookie', preference ? 'true' : 'false');
        this.toggleCookieAlert();
    }

    public static toggleCookieAlert(): void {
        const avisoCookie = $('#aviso-cookie');
        avisoCookie.toggle(!this.getCookiePreference());
    }
}

export class Server {
    public static async sendUserPreferences(): Promise<void> {
        try {
            const cookiePreference = Cookies.getCookiePreference();
            await $.post("../php/server-getter.php", { cookie: cookiePreference });
        } catch (error) {
            console.error('Error in HTTP request:', error);
        }
    }
}