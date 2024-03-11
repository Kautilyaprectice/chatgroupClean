const express = require('express');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
    res.send(`<form action="/submitcontact" method="POST">
    <input type="text" name="name" placeholder="Name">
    <br>
    <input type="email" name="email" placeholder="Email">
    <br>
    <button type="submit">Submit</button>
    </form>`);
});

router.post('/submitcontact', (req, res, next) => {
    res.redirect('/success');
});

module.exports = router;