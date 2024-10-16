import util from "util";

const first = "Lutfiya";
const last = "Ainurrahman";

console.info(`Halo ${first}`);
console.info(util.format("Halo %s %s", first, last));

const person = {
    firstName: "LutfiyaDepan",
    lastName: "LutfiyaBelakang"
};

console.info(`person : ${JSON.stringify(person)}`);
console.info(util.format("person: %j", person));