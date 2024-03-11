const path = require('path');

const express = require('express');

const router = express.Router();

router.use('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.post('/username',(req, res, next) => {
    res.redirect('/');
});

module.exports = router;