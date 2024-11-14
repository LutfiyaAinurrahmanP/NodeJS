import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(express.static(path.join(__dirname, 'public')));
// router.use(express.static(__dirname + "/public"));

router.get('/', (req, res) => {
    console.log("Selamat datang");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default router;
