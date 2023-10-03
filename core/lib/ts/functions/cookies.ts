export class CookiesUtil {
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
