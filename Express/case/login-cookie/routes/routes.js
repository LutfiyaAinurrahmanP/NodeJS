const express = require('express');
const { login, logout, dashboard } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);

router.get('/dashboard', dashboard);

module.exports = router;