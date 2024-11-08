import winston from "winston";

test('logger format', () => {
    const logger = winston.createLogger({
        level: "info",
        // format: winston.format.json(),
        // format: winston.format.simple(),
        format: winston.format.logstash(),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info("Hello World!");
});