import winston from "winston";

async function callAsync() {
    return Promise.reject("ups");
}

const logger = winston.createLogger({
    level: 'info',
    // handleExceptions: true,
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleRejections: true,
            handleExceptions: true,
            filename: "rejections.log"
        })
    ]
});

callAsync();