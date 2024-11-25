import { logger } from "./applications/logging.js";
import { web } from "./applications/web.js";

// web.listen(300, () => {
//     logger.info("App Start ")
// });

const port = 3000;
const host = 'localhost';

web.listen(port, host, () => {
    logger.log(`Server telah berjalan pada http://${host}:${port}`);

})