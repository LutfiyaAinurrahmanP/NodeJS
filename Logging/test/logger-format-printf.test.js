import winston from "winston";

test('logger format winston', () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.printf(info=>{
            return `${new Date()} : ${info.level.toUpperCase()} : ${info.message.toUpperCase()}`;
        }),
        transports: [
            new winston.transports.Console({})
        ]
    });
    logger.info("Hello world!");
});