import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Ini adalah homepage method get');
});

app.get('/about', (req, res) => {
    res.send('Ini adalah halaman about method get');
});

app.listen(3000, () => {
    console.log(`Server berjalan di http://localhost:3000`);
})