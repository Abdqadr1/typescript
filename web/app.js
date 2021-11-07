import Invoice from "./classes/invoice.js";
import { ListDoc } from "./classes/listdoc.js";
import Payment from "./classes/payment.js";
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
const form = document.querySelector(".new-log-form");
const ul = document.querySelector(".log-list");
const listdoc = new ListDoc(ul);
const type = form.querySelector("#type");
const tofrom = form.querySelector("#to-from");
const note = form.querySelector("#note");
const amount = form.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let doc;
    //use tuple
    let args = [tofrom.value, note.value, amount.valueAsNumber];
    if (type.value === "payment") {
        doc = new Payment(...args);
    }
    else {
        doc = new Invoice(...args);
    }
    listdoc.render(doc, type.value, 'end');
});
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["VIDEO"] = 1] = "VIDEO";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["AUDIO"] = 3] = "AUDIO";
    ResourceType[ResourceType["MAGAZINE"] = 4] = "MAGAZINE";
})(ResourceType || (ResourceType = {}));
// generics
const addUID = (obj) => {
    let uid = Math.floor((Math.random() * 100));
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "lekan", age: 23 });
console.log(docOne.age);
let res = {
    uid: "dkjag",
    type: ResourceType.BOOK,
    data: { name: "ok", age: 23 },
};
console.log(res);
// Tuples
let array = [43, 'hi', false];
array[2] = 4;
let tup = ["wader", 45, true];
// tup[2] = 4; /error
