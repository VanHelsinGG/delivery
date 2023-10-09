export class CookiesUtil {
    public static getPreference(): boolean {
        return !!localStorage.getItem('cookie');
    }

    public static accept(preference: boolean): void {
        localStorage.setItem('cookie', preference ? 'true' : 'false');
        this.toggleAlert();
    }

    public static toggleAlert(): void {
        const avisoCookie = $('#aviso-cookie');
        avisoCookie.toggle(!this.getPreference());
    }
}
