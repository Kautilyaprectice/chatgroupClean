const express = require('express');

const router = express.Router();

router.use('/login', (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/username" method="POST">
    <input type="text" name="username" id="username">
    <br>
    <button type="submit">Login</button>
    </form>`);
});

router.post('/username',(req, res, next) => {
    res.redirect('/');
});

module.exports = router;
