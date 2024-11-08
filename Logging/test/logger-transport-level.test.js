import winston from "winston";

test('logger with file transport level', () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "app.log"
            }),
            new winston.transports.File({
                level: "error",
                filename: "app-error.log"
            })
        ]
    });
    logger.info("Hello kalian semua!");
    logger.error("Hello kalian semua!");
});