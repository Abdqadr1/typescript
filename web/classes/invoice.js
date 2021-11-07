class Invoice {
    // public tofrom: string;
    // readonly details: string;
    // private amount: number;
    constructor(employer, details, amount) {
        this.employer = employer;
        this.details = details;
        this.amount = amount;
        this.details = details;
    }
    format() {
        return `${this.employer.toUpperCase()} owes $${this.amount} for ${this.details}`;
    }
}
export default Invoice;
