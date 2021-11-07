interface IsMe {
    name: string;
    amount: number;
    spend(a: number): number;
    speak(a: string): void;
}
export default IsMe;