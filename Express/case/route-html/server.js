import express from 'express';
import router from './routes.js';

const app = express();
const port = 3000;
const host = 'localhost';

app.use(router)

app.listen(port, host, () => {
    console.log(`app berjalan pada http://${host}:${port}`);
})