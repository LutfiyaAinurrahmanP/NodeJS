import {Console} from "console";
import fs from "fs";

const logFile = fs.createWriteStream("TutorialDasar/app.log");

const log = new Console({
    stdout: logFile,
    stderr: logFile
});

log.info("Hello world");
log.error("ups");
const person = {
    firstName: "Lutfiya",
    lastName: "Ainurrahman"
};
log.table(person);