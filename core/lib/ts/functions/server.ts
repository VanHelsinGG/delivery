import { CookiesUtil } from "./cookies";

export class ServerUtil {
    public static async sendUserPreferences(): Promise<void> {
        try {
            const cookiePreference = CookiesUtil.getPreference();
            await $.post("../php/server-getter.php", { cookie: cookiePreference });
        } catch (error) {
            console.error('Error in HTTP request:', error);
        }
    }
}