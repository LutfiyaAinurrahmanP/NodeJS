import { EventEmitter } from "events";

const emiter = new EventEmitter();

emiter.addListener("hello", (name) => {
    console.info(`hello, ${name}`);
});
emiter.addListener("hello", (name) => {
    console.info(`hello, ${name}`);
});

emiter.emit("hello", "lutfiya")