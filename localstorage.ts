export class LocalStorageUtil {
    public static exists(key: string): boolean {
        try {
            const item = localStorage.getItem(key);
            return item !== null;
        } catch (error) {
            console.error('Error while checking if key exists in local storage:', error);
            return false;
        }
    }

    public static setValue(key: string, value: any): void {
        let formattedKey = key.toLowerCase();

        if (typeof value === "boolean") {
            value = value ? '1' : '0';
        } else {
            value = value.toString();
        }

        try {
            localStorage.setItem(formattedKey, value);
        } catch (error) {
            console.error('Error while setting local storage value:', error);
        }
    }

    public static getValue(key: string): string | null {
        try {
            let formattedKey = key.toLowerCase();

            if (this.exists(key)) {
                return localStorage.getItem(formattedKey);
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error while getting local storage value:', error);
            return null;
        }
    }
}
