import process from "process";

process.addListener("exit", (exitCode) => {
    console.info(`NodeJS exit with ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
// console.info(process.report); 
// console.info(process.env); 

process.exit(1);
console.info("hello");