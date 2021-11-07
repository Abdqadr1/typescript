import { HasJob } from "../interfaces/HasJob.js";
class Invoice implements HasJob{
    // public tofrom: string;
    // readonly details: string;
    // private amount: number;
    
    constructor(
        public employer: string,
         readonly details: string,
        private amount: number
    ) {
        this.details = details;
    }

    public format() {
        return `${this.employer.toUpperCase()} owes $${this.amount} for ${this.details}`;
    }

    
}

export default Invoice;