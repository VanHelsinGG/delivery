export class NumberUtil {
    private static calculatePercentage(decimalPercentage: number, value: number): number {
        return value * (1 + decimalPercentage);
    }

    public static giveDiscount(value: number, percentage: number): number {
        if (percentage >= 100 || percentage < 0) {
            throw new Error("Invalid percentage value");
        }

        const decimalPercentage = percentage / 100;
        const result = this.calculatePercentage(-decimalPercentage, value);
        return Number(result.toFixed(2)); 
    }

    public static giveRise(value: number, percentage: number): number {
        if (percentage < 0) {
            throw new Error("Negative percentage is not allowed; use giveDiscount method instead");
        }

        const decimalPercentage = percentage / 100;
        const result = this.calculatePercentage(decimalPercentage, value);
        return Number(result.toFixed(2));
    }

    /** TODO: fazer funcionar */
    public static getPercentage(finalValue: number, initialValue: number): number {
        return (initialValue * 100) / finalValue;
    }
}
