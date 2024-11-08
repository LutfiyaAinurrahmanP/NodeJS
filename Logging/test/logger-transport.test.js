import TransportStream from "winston-transport";
import winston, { silly } from "winston";

test('create new transport', () => {

    class MyTransport extends TransportStream {

        constructor(option) {
            super(option);
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }

    }
    
    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new MyTransport({})
        ]
    });

    logger.error("Error Message");
    logger.warn("Warn Message");
    logger.info("Info Message");
    logger.http("HTTP Message");
    logger.verbose("Verbose Message");
    logger.debug("Debug Message");
    logger.silly("Silly Message");
});