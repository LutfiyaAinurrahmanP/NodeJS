require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static('views'));

app.use('/auth', authRoutes);

const port = 3000;
const host = 'localhost';

app.listen(port, host, () => {
    console.log(`Server telah berjalan pada http://${host}:${port}`);

})