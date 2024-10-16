import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
    console.info(`primary :  ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    };
    cluster.addListener("exit", (worker) => {
        console.info(`worker :  ${worker.id} is exit`);
        cluster.fork();
    });
};

if (cluster.isWorker) {
    console.info(`start cluster :  ${process.pid}`);
    const server = http.createServer((req, res) => {
        res.write(`Response from process ${process.pid}`);
        res.end();
        process.exit();
    });
    server.listen(3000);
    
};