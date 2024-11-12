import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;
const host = 'localhost';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/products/*.json', (req, res) => {
    // res.send(req.originalUrl);
    console.log('anda berhasil mengakses /products/*.json');
    res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

app.get('/categories/*(\\d+).json', (req, res) => {
    // res.send(req.originalUrl);
    console.log('anda berhasil mengakses /categories/(\\d+).json');
    res.sendFile(path.join(__dirname, '/', 'categories.html'));
    
});

app.listen(port, host, () => {
    console.log(`server berjalan di http://${host}:${port}`);
})