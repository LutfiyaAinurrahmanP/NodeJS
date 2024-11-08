import winston from "winston";

test('logger with file transport', () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "app.log"
            })
        ]
    });

    logger.info("Hello World!");
    logger.info("Hello World!");
});