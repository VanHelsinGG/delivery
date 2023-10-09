export class StringUtil {
    private static readonly EMAIL_REGEX: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    public static isValidEmail(email: string): boolean {
        return this.EMAIL_REGEX.test(email);
    }

    public static isValidCPF(cpf: string): boolean {

        const cleanedCPF = cpf.replace(/\D/g, '');
      
        if (cleanedCPF.length !== 11) {
          return false;
        }
      
        let sum = 0;
        for (let i = 0; i < 9; i++) {
          sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
        }
        const firstDigit = (sum * 10) % 11;
      
        sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
        }
        const secondDigit = (sum * 10) % 11;
      
        return (
          cleanedCPF.charAt(9) === String(firstDigit % 10) &&
          cleanedCPF.charAt(10) === String(secondDigit % 10)
        );
      }
      
}