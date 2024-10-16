import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("TutorialDasar/worker-threads.mjs", { type: 'module' });
const worker2 = new Worker("TutorialDasar/worker-threads.mjs", { type: 'module' });


worker1.postMessage(10);
worker2.postMessage(10);