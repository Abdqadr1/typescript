class Payment {
    // public tofrom: string;
    // readonly details: string;
    // private amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `${this.recipient.toUpperCase()} pays $${this.amount} for ${this.details}`;
    }
}
export default Payment;
