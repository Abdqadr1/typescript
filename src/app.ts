import Invoice from "./classes/invoice.js";
import { ListDoc } from "./classes/listdoc.js";
import Payment from "./classes/payment.js";
import { HasJob } from "./interfaces/HasJob.js";

// let doc1: HasJob;
// let doc2: HasJob;

// doc1  = new Payment("Lekan", "web dev", 250);
// doc2 = new Invoice("Lekan", "mobile dev", 450);
// const documents: HasJob[] = [];
// documents.push(doc1)
// documents.push(doc2)

// documents.forEach(pay => {
//     console.log(pay.format())
// })

const form = document.querySelector(".new-log-form") as HTMLFormElement;

const ul = document.querySelector(".log-list") as HTMLUListElement;
const listdoc: ListDoc = new ListDoc(ul);
const type = form.querySelector("#type") as HTMLSelectElement;
const tofrom = form.querySelector("#to-from") as HTMLInputElement;
const note = form.querySelector("#note") as HTMLInputElement;
const amount = form.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    let doc: HasJob;

    //use tuple
    let args: [string, string, number] = [tofrom.value, note.value, amount.valueAsNumber]

    if (type.value === "payment") {
        doc = new Payment(...args);
    } else {
        doc = new Invoice(...args);
    }

    listdoc.render(doc, type.value, 'end');
});
// ENUMS
enum ResourceType {
    BOOK, VIDEO, FILM, AUDIO, MAGAZINE
}
// generics
const addUID = <T extends {}>(obj: T) => {
    let uid = Math.floor((Math.random() * 100));
    return {...obj, uid};
}
let docOne = addUID({ name: "lekan", age: 23 });
console.log(docOne.age);

// another exmaple
interface Resource<T> {
    uid: string,
    type: number,
    data: T,
}

let res: Resource<{}> = {
    uid: "dkjag",
    type: ResourceType.BOOK,
    data: {name: "ok", age: 23},
}

console.log(res);

// Tuples
let array = [43, 'hi', false];
array[2] = 4;

let tup: [string, number, boolean] = ["wader", 45, true];
// tup[2] = 4; /error


