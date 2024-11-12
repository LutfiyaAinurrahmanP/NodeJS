import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res)=>{
    console.log("Selamat datang");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

router.get('/asus.html', (req, res)=>{
    console.log('anda masuk kedalam web asus');
    res.sendFile(path.join(__dirname, 'public', 'asus.html'));
});

router.get('/acer.html', (req, res)=>{
    console.log('anda masuk kedalam web acer');
    res.sendFile(path.join(__dirname, 'public', 'acer.html'));
});

router.get('/lenovo.html', (req, res)=>{
    console.log('anda masuk kedalam web lenovo');
    res.sendFile(path.join(__dirname, 'public', 'lenovo.html'));
});

export default router;