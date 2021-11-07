import { HasJob } from "../interfaces/HasJob.js";
class Payment implements HasJob{
    // public tofrom: string;
    // readonly details: string;
    // private amount: number;
    
    constructor(
        public recipient: string,
         readonly details: string,
        private amount: number
    ) {
        this.details = details;
    }

    public format() {
        return `${this.recipient.toUpperCase()} pays $${this.amount} for ${this.details}`;
    }
    
}

export default Payment;