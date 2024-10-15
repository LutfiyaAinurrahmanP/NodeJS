import { start } from 'repl';
import timers from 'timers/promises';

// console.info(new Date());
// await timers.setTimeout(5000);

// console.info(new Date());

for await(const startTime of timers.setInterval(1000, new Date())){
    console.info(`Start time at ${startTime}`);
}